var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var MongoDao = require("./mongodb.dao");

var compression = require("compression");

// 引入配置
var config = require("./config/config");

//引入JWT
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//引入工具类
var utils = require("./common/utils");

// mongo数据库设置
mongoose.connect(config.database);

// 设置superSecret 全局参数
app.set("superSecret", config.jwtsecret);

//开启gzip压缩
app.use(
  compression({
    filter: function(req, res) {
      if (
        req.headers["x-no-compression"] ||
        req.path.match(/(^\/api*)|(^\/enter)|(^\/login)/g)
      ) {
        // 过滤
        return false;
      }
      return compression.filter(req, res);
    }
  })
);

// 使用 body parser 将post参数及URL参数可以通过 req.body或req.query 拿到请求参数
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// 使用 morgan 将请求日志输出到控制台
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static(path.join(__dirname, "/ie")));

//API跟路径返回内容
app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.get("/login", function (req, res) {
  res.sendfile("index.html");
});

app.get("/ie", function(req, res) {
  res.sendfile("ie/ie.html");
});

app.get("/ie_img", function(req, res) {
  res.sendfile("ie/ie.jpg");
});

app.get("/getChrome64", function(req, res) {
  res.sendfile("ie/ChromeSetup_64.exe");
});
app.get("/getChrome32", function(req, res) {
  res.sendfile("ie/ChromeSetup_32.exe");
});

app.get("/enter", function(req, res) {
  var code = req.query.paperCode;
  if (!code) {
    return res.json(utils.createMsg(400));
  }
  MongoDao.getActivePaperByCode(code, function(data) {
    if (!data) {
      res.json(utils.createMsg(400));
    } else {
      res.json(data);
    }
  });
});

app.post("/login", function(req, res) {
  var userName = req.body.name,
    userPassword = req.body.password;
  MongoDao.getUserByUserName(userName, function(user) {
    if (!user) {
      res.json(utils.createMsg(400));
    } else {
      if (user.password != userPassword) {
        res.json(utils.createMsg(400));
      } else {
        var token = jwt.sign(user, app.get("superSecret"), {
          expiresIn: 60 * 60 * 24 // 授权时效24小时
        });
        res.json(
          Object.assign(
            {
              token: token
            },
            utils.createMsg(200)
          )
        );
      }
    }
  });
});

//getPaperByCode
app.get("/getPaperByCode", function(req, res) {
  var paperCode = req.query.paperCode;
  if (!paperCode) {
    return res.json(utils.createMsg(400));
  } else {
    MongoDao.getPaperIdByPaperCode(paperCode, function(ido) {
      if (ido == null) {
        return res.json(utils.createMsg(400));
      }
      MongoDao.getPaperDetailByPaperId(ido.id, function(result) {
        if (!result) {
          return res.json(utils.createMsg(400));
        } else {
          return res.json(result);
        }
      });
    });
  }
});

app.post("/submitAnswer", function(req, res) {
  var answer = req.body.answer;console.log(JSON.stringify(answer))
  if (!answer) {
    return res.json(utils.createMsg(400));
  }
  MongoDao.getPaperIdByPaperCode(answer.paperCode, function(ido) {
    if (!ido) {
      return res.json(utils.createMsg(400));
    } else {
      answer.paperId = ido.id;
      answer.submitDate = utils.formatDate(new Date(), "yyyy-MM-dd");
      MongoDao.addAnswer(answer, function(result) {
        if (result && result === 1) {
          return res.json(utils.createMsg(200));
        } else {
          return res.json(utils.createMsg(400));
        }
      });
    }
  });
});

//  localhost:端口号/api 路径路由定义
var apiRoutes = express.Router();
apiRoutes.use(function(req, res, next) {
  // 拿取token 数据 按照自己传递方式写
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    // 解码 token (验证 secret 和检查有效期（exp）)
    jwt.verify(token, app.get("superSecret"), function(err, decoded) {
      if (err) {
        return res.json(utils.createMsg(500));
      } else {
        // 如果验证通过，在req中写入解密结果
        req.decoded = decoded;
        // console.dir('decoded:  ' + decoded);
        next(); //继续下一步路由
      }
    });
  } else {
    // 没有拿到token
    return res.send(utils.createMsg(500));
  }
});

apiRoutes.get("/papers", function(req, res) {
  if (!req.decoded._doc.name) {
    return res.json(utils.createMsg(400));
  }
  MongoDao.getPapersByUserName(req.decoded._doc.name, function name(data) {
    if (!data) {
      return res.json(utils.createMsg(400));
    }
    return res.json(data);
  });
});

apiRoutes.get("/setPaperStatus", function(req, res) {
  var name = req.decoded._doc.name,
    status = req.query.status == "true",
    paperId = req.query.paperId;
  if (!name || !paperId) {
    return res.json(utils.createMsg(400));
  } else {
    MongoDao.getPaperIdsByUserName(name, function name(ids) {
      if (!ids || !ids.some(ido => ido.id === paperId)) {
        return res.json(utils.createMsg(400));
      }
      MongoDao.setPaperStatusByPaperId(paperId, status, function(result) {
        if (result && result === 1) {
          return res.json(utils.createMsg(200));
        } else {
          return res.json(utils.createMsg(400));
        }
      });
    });
  }
});

apiRoutes.get("/deletePaper", function(req, res) {
  var name = req.decoded._doc.name,
    paperId = req.query.paperId;
  if (!name || !paperId) {
    return res.json(utils.createMsg(400));
  } else {
    MongoDao.getPaperIdsByUserName(name, function name(ids) {
      if (!ids || !ids.some(ido => ido.id === paperId)) {
        return res.json(utils.createMsg(400));
      }
      MongoDao.deletePaperByPaperId(paperId, function(result) {
        if (result && result === 1) {
          return res.json(utils.createMsg(200));
        } else {
          return res.json(utils.createMsg(400));
        }
      });
    });
  }
});

apiRoutes.post("/submitPaper", function(req, res) {
  var name = req.decoded._doc.name,
    paperData = req.body.paperData;
  if (!name || !paperData) {
    return res.json(utils.createMsg(400));
  }
  paperData.acount = name;
  paperData.status = true;
  paperData.code = utils.generateMixed(12);
  paperData.createDate = utils.formatDate(new Date(), "yyyy-MM-dd");
  MongoDao.addPaper(paperData, function(result) {
    if (result && result === 1) {
      return res.json(
        Object.assign(
          {
            paperCode: paperData.code
          },
          utils.createMsg(200)
        )
      );
    } else {
      return res.json(utils.createMsg(400));
    }
  });
});

apiRoutes.get("/paperDetail", function(req, res) {
  var name = req.decoded._doc.name,
    paperId = req.query.paperId;
  if (!name || !paperId) {
    return res.json(utils.createMsg(400));
  } else {
    MongoDao.getPaperIdsByUserName(name, function name(ids) {
      if (!ids || !ids.some(ido => ido.id === paperId)) {
        return res.json(utils.createMsg(400));
      }
      MongoDao.getPaperDetailByPaperId(paperId, function(result) {
        if (!result) {
          return res.json(utils.createMsg(400));
        } else {
          return res.json(result);
        }
      });
    });
  }
});

apiRoutes.get("/paperAnalysis", function(req, res) {
  var name = req.decoded._doc.name,
    paperId = req.query.paperId;
  if (!name || !paperId) {
    return res.json(utils.createMsg(400));
  } else {
    MongoDao.getPaperIdsByUserName(name, function name(ids) {
      if (!ids || !ids.some(ido => ido.id === paperId)) {
        return res.json(utils.createMsg(400));
      }
      MongoDao.getPaperDetailByPaperId(paperId, function(result) {
        result = result.toObject();
        if (!result) {
          res.json(utils.createMsg(400));
        } else {
          result.answerList = [];
          MongoDao.getPaperAnswersByPaperId(paperId, function(resultAl) {
            result.answerList = resultAl.map(mdl => mdl.toObject());
            res.json(result);
          });
        }
      });
    });
  }
});

apiRoutes.get("/deleteAnswer", function(req, res) {
  var name = req.decoded._doc.name,
    paperId = req.query.paperId,
    answerId = req.query.answerId;
  if (!name || !paperId || !answerId) {
    return res.json(utils.createMsg(400));
  } else {
    MongoDao.getPaperIdsByUserName(name, function name(ids) {
      if (!ids || !ids.some(ido => ido.id === paperId)) {
        return res.json(utils.createMsg(400));
      }
      MongoDao.getPaperAnswersByPaperId(paperId, function(ans) {
        if (!ans || !ans.some( an => an.paperId === paperId)) {
          return res.json(utils.createMsg(400));
        } else {
          MongoDao.deleteAnswerByAnswerId(answerId, function(result) {
            if (result && result === 1) {
              return res.json(utils.createMsg(200));
            } else {
              return res.json(utils.createMsg(400));
            }
          });
        }
      });
    });
  }
});

// 注册API路由
app.use("/api", apiRoutes);

app.listen(config.network.port);

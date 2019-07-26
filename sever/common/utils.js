// 引入配置
var config = require("../config/config");

//引入JWT
const jwt = require("jsonwebtoken");

var MSG = {
  200: {
    code: 200,
    msg: "success"
  },
  400: {
    code: 400,
    msg: "failed"
  },
  500: {
    code: 500,
    msg: "unauthenticate"
  }
};
var tokenTime = 60 * 60 * 24;
var chars = ['0','1','2','3','4','5','6','7','8','9',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

module.exports = {

  //生成随机数
  generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*61);
         res += chars[id];
     }
    return res;
  },

  formatDate(date,fmt){
      if(!date){
        return '';
      }
      fmt = fmt || "yyyy-MM-dd";
      var o = {
          "M+": date.getMonth() + 1, //月份 
          "d+": date.getDate(), //日 
          "h+": date.getHours(), //小时 
          "m+": date.getMinutes(), //分 
          "s+": date.getSeconds(), //秒 
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
          "S": date.getMilliseconds() //毫秒 
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
  },

  //生成token
  createToken(name, special) {
    return (token = jwt.sign(
      {
        name,
        special
      },
      config.jwtsecret,
      {
        //秒=>到期时间
        expiresIn: tokenTime
      }
    ));
  },

  //生成回复消息
  createMsg(code, path) {
    if (path) {
      return {
        code: 100,
        msg: path
      };
    }
    var result = MSG[code];
    if (result) {
      return result;
    }
  },
  parseJson(req) {
    if (req.body.data) {
      //能正确解析 json 格式的post参数
      return req.body.data;
    } else {
      //不能正确解析json 格式的post参数
      var body = "",
        jsonStr;
      req.on("data", function(chunk) {
        body += chunk; //读取参数流转化为字符串
      });
      req.on("end", function() {
        //读取参数流结束后将转化的body字符串解析成 JSON 格式
        try {
          jsonStr = JSON.parse(body);
        } catch (err) {
          jsonStr = null;
        }
        return jsonStr;
      });
    }
  }
};

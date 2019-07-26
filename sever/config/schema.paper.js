var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo库实例
module.exports = mongoose.model(
  "papers",
  new Schema({
    code: String, //问卷码 后台生成
    acount: String, //所用账号
    status: Boolean, //是否执行中
    title: String,
    dateLine: String, //截至此日期
    createDate: String,
    creator: String, //发起人姓名
    contact: String, //发起人联系方式
    description: String,
    expect: String, //期望填表人数目
    questions: [new Schema({
      index: Number, //题号，0->
      title: String,
      type: String, //题目类型
      required: Boolean, //是否必答题
      items: [new Schema({
        index: String, //选项索引[ABCDEFGHIJKLMNOPQRST] 
        content: String, //选项内容
      })]
    })]
  })
);
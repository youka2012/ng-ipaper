var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo库实例
module.exports = mongoose.model(
  "answers",
  new Schema({
    paperId: String,
    number: String, //填表人工号
    name: String, //姓名
    department: String,
    submitDate: String, //填表日期
    remark: String, //备注信息
    answers: [new Schema({
      index: Number, //题号，0->
      required: Boolean, //是否必答题
      type: String, //题目类型
      answer: [String],
    })]
  })
);
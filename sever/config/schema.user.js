var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// 返回一个mongo库实例
module.exports = mongoose.model(
  "users",
  new Schema({
    name: String,
    password: String,
    type: String
  })
);

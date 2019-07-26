var MongoClient = require("mongodb").MongoClient;
//测试数据
const InitTestData = require("./test.data");

// 引入配置
const config = require("./config/config");

MongoClient.connect(config.mongodb_url_path, function (err, db) {

    const dp = db.db(config.mongodb_db_name);

    const tables = config.init_data.db.tables;
    tables.forEach(function(name){
        dp.collection(name).drop()
        dp.createCollection(name);
    })
    
    for (let c in InitTestData) {
        let ct = dp.collection(c);
        ct.insertMany(InitTestData[c]);
    }
})
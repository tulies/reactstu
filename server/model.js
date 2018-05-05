const mongoose = require('mongoose');
// 链接数据库
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat';
mongoose.connect(DB_URL);

const models = {
    user:{
        uname: { type: String, require: true },
        upass: { type: String, require: true },
        type: { type: String, require: true },
        // 头像
        avatar: { type: String },
        // 描述
        desc: { type: String },
        // 职位名称
        title: { type: String },
        // 公司名
        company: { type: String},
        // mongey
        money: { type: String }
    }
};

for ( let m in models ){
    mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
    getModel : name=>{
        return mongoose.model(name);
    }
};

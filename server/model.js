const mongoose = require('mongoose');
// 链接数据库
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat';
mongoose.connect(DB_URL);

const models = {
    user:{
        user:{}
    }
}

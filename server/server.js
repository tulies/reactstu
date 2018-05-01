const express = require("express");
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/imooc';

mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
   console.log('mongo connect success');
});
const User = mongoose.model('user', new mongoose.Schema({
    name:{type:String, require:true},
    age:{type:Number, require:true}
}));

// User.create({
//     name:'tulies',
//     age:30
// },function (err, doc) {
//     if(!err){
//         console.log(doc)
//
//     }else{
//         console.log(err)
//     }
// });
//
// User.remove({name:'tulies'},function (err, doc) {
//     console.log(doc)
//
// });

// User.update({name:'txtxtx'},{'$set':{name:'other'}},function (err, doc) {
//     console.log(doc)
// });

const app = express();
app.get('/', (req, res)=>{
    res.send('<h1>hello!</h1>');
});

app.get('/data', (req, res)=>{
   // res.json({name: 'wang',type: 'love'});
   User.findOne({name:'tulies'},function (err, doc) {
       res.json(doc)
   })


});

app.listen(9093,()=>{
    console.log('Node app start at port 9093');
});
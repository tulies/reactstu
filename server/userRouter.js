const express = require('express');
const utility = require('utility');

const model = require('./model');

const Router = express.Router();
const User = model.getModel('user');

Router.get('/list', function (req, res) {
    // res.send('<h2>list</h2>');
    User.find({},function (e, d) {
        return res.json(d);
    })
});

module.exports = Router;


// User.create({
//     uname: 'tulies',
//     upass: '123456',
//     type: 'boss'
// },function (err, doc) {
//     if(!err){
//         console.log(doc)
//
//     }else{
//         console.log(err)
//     }
// });

// User.remove({},function (err, doc) {
//     console.log(doc)
//
// });

// User.update({name:'txtxtx'},{'$set':{name:'other'}},function (err, doc) {
//     console.log(doc)
// });

// app.get('/data', (req, res)=>{
//     // res.json({name: 'wang',type: 'love'});
//     User.findOne({name:'tulies'},function (err, doc) {
//         res.json(doc)
//     })
//
//
// });
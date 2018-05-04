const express = require('express');
const utility = require('utility');

const model = require('./model');

const Router = express.Router();
const User = model.getModel('user');

const _filter = {'upass':0,'__v':0}


Router.get('/list', function (req, res) {
    const { type } = req.query;
    let _conditions = {};
    if (type){
        _conditions = {type};
    }
    User.find(_conditions,_filter,function (e, d) {
        if (e) {
            return res.json({code:1, msg:'后端出错了'})
        }
        if (d) {
            return res.json({code:0,data:d})
        }
    })
});
Router.get('/info', function (req, res) {
    const { userid } = req.cookies
    if (!userid) {
        return res.json({code:-1, msg:'未登录，缺少cookie'})
    }
    User.findOne({_id:userid},_filter,function (e, d) {
        if (e) {
            return res.json({code:1, msg:'后端出错了'})
        }
        if (d) {
            return res.json({code:0,data:d})
        }
    })
});
Router.post('/login', function (req, res) {
    const {uname, upass} = req.body;
    if(!uname || !upass){
        return res.json({code:-1,msg:'缺少参数'})
    }
    User.findOne({uname: uname, upass: md5Pwd(upass)},function (e, d) {
        if (!d) {
            return res.json({code:1,msg:'用户名或者密码错误'})
        }
        res.cookie('userid', d._id)
        return res.json({code:0,data:d});

    })
});

Router.post('/register', function (req, res) {
    const {uname, upass, type} = req.body;
    if(!uname || !upass || !type){
        return res.json({code:-1,msg:'缺少参数'})
    }
    User.findOne({uname: uname},function (e, d) {
        if (d){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({uname,type,upass: md5Pwd(upass)})

        userModel.save(function(ee,dd){
            if (ee) {
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user, type, _id} = dd;
            res.cookie('userid', _id);
            return res.json({code:0,data:{uname, type, _id}})
        });
    });
});

Router.post('/update', function (req, res) {
    const userid = req.cookies.userid;
    if (!userid) {
        return res.json({code:-1,msg:'未登录'})
    }

    const body = req.body;
    User.findByIdAndUpdate(userid, body, {"fields": _filter}, function (e, d) {
        const data = Object.assign({},{
            uname: d.uname,
            type:d.type
        },body);
        console.log(d);
        return res.json({code:0, data});
    })
});

function md5Pwd(upass){
    const salt = 'tulies_i_love_you!@#IUHJh~~';
    return utility.md5(utility.md5(upass+salt))
}


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
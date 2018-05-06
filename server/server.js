const express = require("express");
const cookieParser= require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./userRouter');
const model = require('./model');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const Chat = model.getModel('chat');

io.on('connection',function(socket){
    console.log('user login');
    socket.on('sendmsg',function(data){
        console.log(data);
        const {from, to, msg} = data;
        const chatid = [from,to].sort().join('_');
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recvmsg', Object.assign({},doc._doc))
        });
    })
});


app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);

app.get('/', (req, res)=>{
    res.send('<h1>hello!</h1>');
});

server.listen(9093,()=>{
    console.log('Node app start at port 9093');
});
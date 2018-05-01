const express = require("express");
const cookieParser= require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./userRouter');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);

app.get('/', (req, res)=>{
    res.send('<h1>hello!</h1>');
});

app.listen(9093,()=>{
    console.log('Node app start at port 9093');
});
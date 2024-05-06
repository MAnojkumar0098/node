const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const request =require('request');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/about',function(req,res){
    console.log(req.query.task);
    res.sendFile(__dirname+"/index.html");
});

app.post('/about',function(req,res){
    res.send(`<h4><input type='checkbox' value='' >${req.body.task}</h4>`);
});

request('',function(error,res,body){
    console.log(body);
})

app.listen(3000,function(){
    console.log('server started');
})


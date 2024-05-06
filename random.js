const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    let ran=Number(Math.random()*10+1);
    ran = Math.floor(ran);
    res.render('rand.ejs',{num:ran});
})
app.listen(8081,function(req,res){
    console.log('server set');
})

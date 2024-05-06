const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("publi"))
app.set("view engine","ejs"); 

app.listen(8080,function(){ console.log('hey! server started.')})

var v='';
var items=['eat'];
app.get('/home',function(req,res){
    var d = new Date();
    var day = d.getDay();
    var strday='';
    switch(day)
    {
        case 0:
            strday = 'sunday';
            break;
        case 1:
            strday = 'monday';
            break;
        case 2:
            strday = 'tueday';break;
        case 3:
            strday = 'wednesday';break;
        case 4:
            strday = 'thrusday';break;
        case 5:
            strday = 'friday';break;
        case 6:
            strday = 'saturday';break;
    }
    res.render('task',{dayvar:strday,newtask:items});
})
app.get('/personal',function(req,res){
    res.send("<h1 style=color:green;>HEY! its your personal portal yet to create</H1>")
})

app.get('/search',function(req,res){
    console.log(req.query);
    res.send(req.query);
})
// to access the query strings.

app.get('/home/:v',function(req,res){
    const {v} = req.params;
    res.send(`browsing ${v}`);
})

app.get('/home/109/:v',function(req,res){
    const {v} = req.params;
    res.send(`browsing ${v}`);
})
//particular response to particular route.
//identifing the pattern and getting that extra random route into var and respond particularly. 

app.get('*',function(req,res){
    res.send("<h2>i dont know that path</h2>")
})
// response to any all other routes.

app.post('/home',function(req,res){
    items.push(req.body.addtask);
    //res.write(`<h1 style="color:white">${items}</h1>`);
    //res.send();
    //res.render('task',{newtask:v});
    console.table(items)
    res.redirect('/home');
})


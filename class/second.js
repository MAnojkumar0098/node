var url=require('url');
var http =require('http');
var add =require('./add');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var q=url.parse(req.url,true).query;
    var a=q.a;
    var b=q.b;
    a=parseInt(a);
    b=parseInt(b);
 
    res.write('hii'+add.add(a,b));
  
    res.end();
}).listen(8000);
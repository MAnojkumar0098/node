var http= require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>hello wordl</h1>');
    res.end("<h2>hii</h2>");
    console.log('hii');
}).listen(8080);
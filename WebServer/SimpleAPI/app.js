var fs = require('fs');
var http = require('http');
var data = require('./content')

http.createServer(function(req,res){
  res.writeHead(200, 'content-type: application/json')

  res.end(JSON.stringify(data));
}).listen(8080, '127.0.0.1');

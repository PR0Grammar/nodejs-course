var fs = require('fs');
var http = require('http');
var api = require('./api.js');

http.createServer(function(req,res){

  //default route to home page
  if(req.url === '/'){
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  }
  //route to api
  else if(req.url === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(api));
  }

  //If no path found
  else{
    fs.createReadStream(__dirname + '/404.htm').pipe(res);
  }
  
}).listen(1336, '127.0.0.1');

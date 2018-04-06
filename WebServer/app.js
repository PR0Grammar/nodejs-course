const http = require('http');

http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type': 'html'});
  res.end(
    '<h1>HELLO USER</h1>' +
    '<h2>This is a simple web server</h2>' +
    '<h3>Using Node.js</h3>' +
    '<h4>You are on localhost port 1337 </h4>' +
    '<h5>There is no place like 127.0.0.1 </h5>'
  );

}).listen(1337, '127.0.0.1');

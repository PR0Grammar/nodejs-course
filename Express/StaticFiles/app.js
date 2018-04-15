var express = require('express');
var app = express();

//Production or local
var port = process.env.PORT || 8080;

//Middleware
app.use('/assets', express.static(__dirname + '/img'));

//Home page.
//HTTP request is generated for /assets/random.jpeg.
//Node will handle the req.
app.get('/', function(req,res){
  res.send('<html><h1>Express~</h1><img src="assets/random.jpeg"/></html>')
});

app.listen(port)

var express = require('express');
var app = express();

//Production or local
var port = process.env.PORT || 8080;

//Home page
app.get('/', function(req,res){
  res.send('<html><h1>Express~</h1></html>')
});

//Route based on given parameter
app.get('/user/:id', function(req,res){
  res.send('<html><h1>Welcome, User '+ req.params.id +'</h1></html>')
});

app.listen(port)

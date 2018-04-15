var express = require('express');
var app = express();

//Production or local
var port = process.env.PORT || 3001;

//Home page
app.get('/', function(req,res){
  res.send('<html><h1>Express~</h1></html>')
});

//API
app.get('/api', function(req,res){
  res.json({
    firstName: 'Nehal',
    lastName: 'Patel',
    student: true,
    github: 'https://github.com/PR0Grammar'
  });
});

app.listen(port)

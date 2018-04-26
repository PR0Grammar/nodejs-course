var express = require('express');
var app = express();

var port = process.env.PORT || 3030;

app.set('view engine', 'pug');
app.use('/assets', express.static(__dirname + "/public"));

app.get('/', function(req,res){
  res.render('index');
});

app.listen(port);

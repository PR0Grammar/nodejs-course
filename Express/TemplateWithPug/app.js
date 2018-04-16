var express = require('express');
var app = express();
var port = 3000;

//Template engine
app.set('view engine', 'pug');

//Resources
app.use('/images', express.static(__dirname + "/img"));

//Home
app.get('/', function(req,res){
  res.render('index', {
    homeTitle : "Welcome",
    homeHeader : "Welcome to Pug!",
    homeDescription : "This is a test app using Pug! Go to /about."
  });
});

//About
app.get('/about', function(req,res){
  res.render('about',{
    aboutTitle : "About Pug",
    aboutHeader : "A Little Something About Pug:",
    aboutDescription: "Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.",
    aboutImg : "images/pup.jpg"
  });
});

app.listen(port)
console.log("Listening on port 3000...");

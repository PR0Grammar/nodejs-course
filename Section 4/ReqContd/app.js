//When no file exists, require will check the dir
//matching the name, and then look for an 'index.js'
//file
var greet = require('./greet');

greet.english();
greet.spanish();
greet.french();
greet.korean();

var greet1 = require('./greet1');
greet1();

//Grab a specific property or method the module.exports obj
var greet2 = require('./greet2').greet;
greet2();

var greet2b = require('./greet2');
greet2b.greet();

var greet3 = require('./greet3');
greet3.msg();
greet3.greeting = "Greeting 3 CHANGED!"

//Since the same obj from greet3 is being referenced, any changes
//to its properties will be shown
var greet3b = require('./greet3');
greet3.msg();

//Prevent caching of the module by calling the constructor for
//each new obj. 'greet4' is the constructor obj, not an instance
//of the obj
var greet4 = require('./greet4');
grt4 = new greet4();
grt4.msg();

//App.JS does not have direct access to all the properties and methods
//of greet 5.
var greet5 = require('./greet5').greet;
greet5.msg();
greet5.msgChange("Greetings 5 CHANGED!");
greet5.msg();

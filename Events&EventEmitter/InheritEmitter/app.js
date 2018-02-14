var EventEmitter = require('events');
var util = require('util');

var userInfo = {
  name : "Nehal Patel",
  login : "3:33:33"
}

function Greeter(){
  this.greeting = "Welcome back, ";
  this.lastLogin = "Last login: ";
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data){
  this.emit('greet', data);
}

var greeter1 = new Greeter();

greeter1.on('greet',function(data){
  console.log(this.greeting + data.name);
  console.log(this.lastLogin + data.login);

  var d = new Date();
  data.login = d.toLocaleTimeString();
});

greeter1.greet(userInfo);

//Value of last login changes
greeter1.greet(userInfo);

//Revealing Module Pattern

var greeting = "Greeting 5";
//Not able to change
var fakeKey = 12345;

function Greeter() {
  this.msg = function(){
    console.log(greeting);
  };
  //Allows user to change values
  //without giving direct access
  this.msgChange = function(newMsg){
    greeting = newMsg;
  };
}

//We can explictly state access in the module exports.
module.exports = {
  greet : new Greeter()
}

function Greeter() {
  this.greeting = "Greetings 4";
  this.msg = function() {
    console.log(this.greeting);
  }
}

//By passing in the constructor rather than
//a new obj, caching is prevented for any
//new instance of the obj
module.exports = Greeter;

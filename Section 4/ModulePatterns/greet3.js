function Greeter() {
  this.greeting = "Greetings 3";
  this.msg = function(){
    console.log(this.greeting)
  };
}

//Creates a Greeter obj, which is then cahched for all uses.
//The same obj is passed by ref.
module.exports = new Greeter();

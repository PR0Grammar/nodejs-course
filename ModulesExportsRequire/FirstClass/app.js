//statement
function greet(){
  console.log("Hello!");
}
greet();

//first-class example
function logGreetings(fn){
  fn();
}
logGreetings(greet);

//function expression
var greetMe = function() {
  console.log("Hello Me!");
}
greetMe();
logGreetings(greetMe);

//Anonymous function expression
logGreetings(function(){
  console.log("Hello Again!");
})

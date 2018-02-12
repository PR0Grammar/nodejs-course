
var foo = "foo2";

// IIFEs are scoped
(function(fooArg){
  var foo = "foo1"
  console.log(foo);
  console.log(fooArg);
}("foo3"));

console.log(foo);

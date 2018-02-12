exports.msg = function(){
  console.log("Hello!");
}


//In this case, we are simply adding a property to
//the obj exports points to, which is the same obj
//module.exports points to. Therefore, in both cases,
//the property can be used.
console.log(exports);
console.log(module.exports);

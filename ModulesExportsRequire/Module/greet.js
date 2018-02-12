var greet = function(){
  console.log("Hello!");
};

//Allows use outside of module

module.exports = greet;

//Node wraps the module before sent to v8

//function(exports, require, module, __filename, __dirname){
  //var greet=function(){
  //console.log("Hello!");
  //};

 //module.exports = greet;
//}

//fn(module.exports, require, module, filename, directoryName)
//return module.exports; <-- Returned by require function as its passed by ref

exports = function() {
  console.log("Greet 1");
}

//Exports and module.exports point to the same obj by default.
//Once the value of exports changes, it will no longer point
//to the same obj in memory, but rather the function,
//therefore module.exports will remain a empty obj
console.log(exports);
console.log(module.exports);

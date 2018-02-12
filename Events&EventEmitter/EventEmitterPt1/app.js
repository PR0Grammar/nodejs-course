var eventEmitter = require('./emitter');

var evnt = new eventEmitter();

evnt.on('add', function(){
  console.log("Adding numbers.......")
});

evnt.on('add', function(){
  console.log("The sum is:");
});

evnt.on('subtract', function(){
  console.log("Subtracting numbers.......");
});

evnt.on('subtract', function(){
  console.log("The difference is:");
});

evnt.emit('add');
console.log(2+2);

evnt.emit('subtract');
console.log(2-2);

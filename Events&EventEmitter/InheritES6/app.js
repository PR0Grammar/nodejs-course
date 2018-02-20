var Coffee = require('./coffee');

var joe1 = new Coffee('medium', 3);

joe1.on('tooMuch', function(){
  console.log("YOU'VE HAD TOO MUCH COFFEE!!");
});

joe1.sip();
joe1.sip();
joe1.sip();

var joe2 = new Coffee('dark', 2);

joe2.on('empty', function(){
  console.log("Your cup is now empty. Please refill.");
});

joe2.sip();
joe2.sip();

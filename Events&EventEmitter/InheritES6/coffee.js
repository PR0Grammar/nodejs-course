'use strict';

var EventEmitter = require('events');

class Coffee extends EventEmitter {
  constructor(roast, sz){
    super(); //Syntatic sugar for .call(this)
    this.roast = roast;
    this.sipNum = 0;
    this.volume = sz;
  }
  //'methods' are part of the prototype
  sip(){
    this.sipNum++;
    this.volume--;
    console.log(`SIP!~ You just drank some ${this.roast} roast coffee. This was sip # ${this.sipNum}.`);

    if(this.sipNum >= 3)
      this.tooMuch();
    if(this.volume == 0)
      this.empty();
  }

  tooMuch(){
    this.emit('tooMuch');
  }

  empty(){
    this.emit('empty');
  }

  spill(){
    console.log('OOPS. You spilled your coffee...');
    this.empty();
  }
  
}

module.exports = Coffee;

function Emitter() {
  this.events = {};
}

//Create new event types and event listeners
//with on(). Types with the same name are stored
//in an array within events
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

//If the event type exists, run all
//methods assosciated with that type
Emitter.prototype.emit = function(type){
  if(this.events[type]){
    this.events[type].forEach(function(fn){
      fn();
    })
  }
}

module.exports = Emitter;

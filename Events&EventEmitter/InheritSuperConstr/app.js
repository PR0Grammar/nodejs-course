var util = require('util');

function Vehicles() {
  this.make = "Tesla ";
}

Vehicles.prototype.vroom = function(){
  console.log("YOU ARE DRIVING A BRAND NEW: " + this.make + this.model + this.year);
}

function Car() {
  Vehicles.call(this); //Allows access to the context of Vehicles. The properties of Vehicles are now in context of Car
  this.model = "Model X ";
  this.year = "2017";
}

util.inherits(Car, Vehicles);

var car = new Car();
car.vroom(); //undefined 'this.make' w/o call of super constructor

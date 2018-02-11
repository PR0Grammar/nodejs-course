function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

//The prototype of any instances created of Person.
//Any Person object created will be able to inherit the properties of
//any prototypes of Person
Person.prototype.greet = function(){
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
};

var bob = new Person("Bob", "Doe");
bob.greet();

//
console.log(bob.__proto__);

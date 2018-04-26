angular.module('TestApp',[]);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
  this.message = 'Hello User. Here is the list:';
  this.peopleInput = 'Enter a name...';
  this.people = [];

  this.addPerson = function(){
      this.people.push(this.peopleInput);
  }
}

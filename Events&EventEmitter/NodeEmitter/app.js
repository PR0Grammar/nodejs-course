var EventEmitter = require('events'); //from Node API
var configEvents = require('./config.js').events; //Event types obj
var emt =  new EventEmitter();

//Test Variables
var tries = 3;
var validUser = true;
var validEmail = false;
var wrongUserOrPass = true;

emt.on(configEvents.LOGIN_MSG, function (){
  console.log("Welcome Back User!");
});

emt.on(configEvents.NO_ACCT, function(){
  console.log("No account assosicated email.");
});

emt.on(configEvents.INVALID_LOGIN, function (){
  console.log("Wrong Password or User Name");
});

emt.on(configEvents.INVALID_LOGIN, function (){
  tries--;
});

emt.on(configEvents.TRY_AGAIN_LATER, function (){
  console.log("Please try again later.");
})

function loginTestOne() {
  if(validUser){
    emt.emit(configEvents.LOGIN_MSG);
  }
}

loginTestOne();

validUser = false;

function loginTestTwo() {
  while(tries != 0){
    if(!validUser){
      emt.emit(configEvents.INVALID_LOGIN);
    }
  }
}

loginTestTwo();

function tooManyAttempts() {
  if(tries == 0){
    emt.emit(configEvents.TRY_AGAIN_LATER);
  }
}

tooManyAttempts();


function passwordResetTest() {
  if(!validEmail){
    emt.emit(configEvents.NO_ACCT);
  }
}

passwordResetTest();

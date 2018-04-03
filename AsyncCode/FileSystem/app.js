var fs = require('fs');
var prompt = require('prompt');


//readFileSync is synchronous, readFile is async
const pswd = fs.readFileSync(__dirname + '/topsecret.txt', 'utf8').trim();

console.log('**********NODE JS************');
function userCred() {
  prompt.get('password', function(err, result){
    if(err)
      errDone();
    if(pswd == result.password)
      welcomeDone();
    else{
      invalidPassword();
      userCred();
    }
  });
}

function errDone() {
  console.log("Error has occured\n");
}

function welcomeDone() {
  console.log("Welcome back, User!\n");
}

function invalidPassword() {
  console.log("Invalid password\n");
}

prompt.start();
userCred();

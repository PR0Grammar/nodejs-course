var location = {
  state: "New York",
  city: "New York",
  zipcode: "00000",
  address: function(){
    console.log(this.state + ',' + this.city + ' ' + this.zipcode);
  }
};

//Two ways to invoke
location.address();
location['address']();

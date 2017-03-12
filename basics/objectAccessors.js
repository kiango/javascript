// the person object gets initialized 
// but its functions is not called

var person = {
  "firstname" : "john",
  "lastname" : "doe",
  "getFullName" : function(){
    // return person.firstname + " " + person.lastname;
    
    // person.x can loose its values if person change pointer like:
    // var person2 = person;
    // person = {}; // person data are lost
    
    // but in this case person attributes are preserved
    // by pointer change like the above
    return this.firstname + " " + this.lastname;
  }
};


// now we call the function getFullName
var fullname = person.getFullName();
console.log(fullname);

var person2 = {
  "firstName" : "sam",
  "secondName" : "smith",
  "getNames" : function() {
    return this.firstName + this.secondName;
  },
  "address" : {
    "street" : "no street 2",
    "city" : "london",
    "state" : "uk"
    },
  "isFromState" : function (state){
      return (state===person2.address.state) // evaluates boolean and returns
  }
};

console.log(person2.isFromState("UK"));


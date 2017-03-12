// overloaded function not possible in javascript
// functions are objects in javascript

// function declaration
function sayHi(name, time){
  console.log("hello " +name+ " Time of day is: " + time);
  // no return would return 'undefined'!
  return "hello " +name+ " Time of day is: " + time;
}

// call it, 2 arguments
sayHi("John", "afternoon");
// call it, 1 argument
sayHi("John"); // returns undefined for the other parameter
// call it with 3 arguments
sayHi("John", "morning", 345); // ignores the 3rd parameter!

var returnedBySayHi = sayHi("joe", "14.30");
console.log(returnedBySayHi);

// functions it self is also a value, It is not executed now!
// f is a function expression, function foo is assigned to f
var f = function foo(){
  console.log("Hi function");
}
// calling the function variable f would execute it here:
f();


// anonymous function expression, the function hae no name
var g = function (){
  console.log(2 + 3);
}
// call
g();
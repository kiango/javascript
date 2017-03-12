/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// types: String, Number, Boolean
console.log("hellow world");
var a = 42;
var b = 20;
console.log(a);
console.log(a+b + " test");
var d = "Hi";
var e = true;
console.log(e);

a = "replaced a from 42 to String!"
console.log(a);

// declaration: var a; a's type is undefined now! The value of a is undefined!
// definition: a = 42; The type and value is now a Number
// null is also a type with no null value.

var h;
//h = false;
console.log(h)
h = null;

// typeof <value>
var g = 10;
console.log(typeof g);
var g = "iskjerber"
console.log(typeof g);
var g = true;
console.log(typeof g);
var g = null;
console.log(typeof g); // bug in javascript null is not object

// Type coersion: compiler/interpreter automatic type convertion
// Type coersion: 123 + "4" = 1234
// comparisions: single = : assignment, double == : equality

// below example javascript make automatic type conversion and equals g and h !
var g = 10;
var h = "10";
if (g==h){ // '===' triple equality do not use auto type convversion!
  console.log("g and h are equal")
}


var g = 0
if (g){ // g is true for all non zero values
  console.log("g is true")
}

// empty string returns false
var emptyString = "oooooooo"
if (emptyString){
  console.log("empty string?")
}

/*
Exception: SyntaxError: identifier starts immediately after numeric literal
@Scratchpad/1:54
*/
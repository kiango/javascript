// Arrays
// All javascript arrays are objects with its special properties
// we use []notation because the keys are as numbers!

var aNumArray = [100, 200, 300];
var aStrArray = ["aa", "bb", "cc"]
// access elements:
var elementNum = aNumArray[0];
var elementStr = aStrArray[1]
console.log(elementNum + "  " + elementStr);

// add elements
aNumArray[3] = "432";
console.log(aNumArray[3]);

// array length
console.log("my length is: "+ aStrArray.length);

// cloning
var myNewStrArr = aStrArray;
console.log(myNewStrArr[2]);

// look at all k,v of the array
console.log(myNewStrArr);

// index of array implication
myNewStrArr[150] = "orange"
console.log(myNewStrArr[150]);
console.log(myNewStrArr); // show we have 150+3 length array!

// length does not count how many element there is in the array
// it reads the last element of the array and adds one, due to 0 indexing
console.log(myNewStrArr.length); // outputs 151


var mixedArr = [10, 20, 30, "red", "shift", "gravity", {}];
// Array method 'push' adds element to array at the last location
mixedArr.push("magnetic");
// Array 'pop' takes the last array element out
mixedArr.pop();
// Array 'shift' adds element at the front of array
mixedArr.shift("blue");
// Array 'unshift' removed element at the front of array
mixedArr.unshift();


// a function
var myFunction = function(){
  console.log("for an element ");
};
// run the function for each element of the array
mixedArr.forEach(myFunction);


// a function , now with argument
var myFunction = function(item){
  console.log("for an element is printet now: " + item);
};
// run the function for each element of the array
mixedArr.forEach(myFunction);


// so the engine behind works like this:
// mixedArr.forEach(myFunction(item, index, array){
//   console.log(item, index);
// });

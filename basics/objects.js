// inline string
var myString = "hello";

// javascript objects are not class-based
// objects are map based : key, val
// add objects freely ...!
// all object properties are freely accessible / public
// empty in line object
var myObject = {};
console.log(myObject);

// adding object property / data dynamically
// objects behave like map (key,val)
myObject.prop = "Ola"
console.log(myObject); // outputs 'prop : Ola'
myObject.prop2 = 231;
console.log(myObject); // outputs 'prop : Ola'

// read object properties
console.log("the number property og myObject " + myObject.prop2);

// object literal
var myObj = {
  "prop_0": "data ....",
  "prop_1": 28493874,
  "prop_3": true,
  "01": "one" // 1 is invalid identifier
};
console.log(myObj);
console.log("access prop_2 that is not exist returns: " + myObj.prop2);

// [] square bracket notation
console.log("accesssing using []notation: " + myObj["prop_1"]);
// []notation is used for accessing when 
// ... property name is a reserved word
// ... property name starts with numbers
// ... property name is dynamic

//console.log(myObj.01); // NOT works
console.log(myObj["01"]); // works


var myCar = {
  "speed":200,
  "brand":"generic",
  "color":"green",
  "flying": false,
  "objProp": {
    "innerProp": "inner property"
  }
};

var propertyName = "brand";
console.log(myCar[propertyName]);

console.log(myCar.objProp.innerProp);

// []notation the javascript-engin cannot do optimization
// dot notation is faster interpretation

// object is a reference to location of a heap/memory, also in javascript
// object can refere to another object by its propertiy / nested object

myCar.objProp.innerProp = "new engin";
// mix and match dot and [] operators
console.log(myCar.objProp["innerProp"]);


// === for objects
var animal = {
  "land": "dog",
  "sea": "fish"
};

var seaAnimal_object;
seaAnimal_object = animal;

console.log(seaAnimal_object.land);

if(animal === seaAnimal_object){
  console.log("seaAnimal_object and animal objects are equal");
}

// about null and undefined
var person = {
  "firstname": "john",
  "age": null,
  "lastname":"doe",
  "middelname":"jay"
};
//person.age is Undefined if it is not set as null or other thing

// remove property of object
delete person.middelname;
console.log(person)




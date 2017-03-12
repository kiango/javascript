// function overloading is not possible
// implicit multiple arguments

// here is a function literal that is without function name
var add = function(a, b){
  console.log(arguments); // arguments key word takes list of arguments
  return a+b;
}
console.log(add(10, 30));

// the other arguments are only registered
// arguments still adds the a and b but it don't do anything with the other args
console.log(add(10, 30, 5, 6, 7, 8, 9));

// registering all extra input args and calculate it
var add = function(a, b){ // a, b can be removed from function args
  var i, sum = 0;
  for ( i=0; i<arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

console.log("sum of all arguments: " + add(1,2,3,4,5,6,7,8,9));
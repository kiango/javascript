// functional programming, passing functions as arguments

// 3. call f
var f = function (name){
  console.log("Hello World: " + name);
}

// a function with input arg as function and a primitive
// 2. call
var runner = function(func, name){
  func(name);
}

// 1. call runner
runner(f, "John Doe");
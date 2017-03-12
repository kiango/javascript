// all primitive types 
// like numbers, string, boolean, undefined etc have an equivalent objects

var greeting = "how are you doing?"
console.log(greeting);
 
//here the 'length' converts the primitive string to equivalent object
// and calls the property of object string for reading the length
// then this String object is rapidly distroyed!
console.log(greeting.length);
// so the greeting is still a primitve string when using typeof:
typeof greeting //outputs string


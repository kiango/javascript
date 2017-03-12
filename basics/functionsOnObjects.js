// adding function/method to obejct and call it

var myCar = {
  "speed": 200,
  "flyable": false
};

myCar.accelerate = function(){
  console.log("accelerate function on myCar object ");
};

// call the method
myCar.accelerate();


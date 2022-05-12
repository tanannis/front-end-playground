/*
Callback
  - A function that is passed to another function as a parameter / argument
  - A function is being called inside another function / after something happens
  - Maybe a better name would be a "call after" function
*/

//example 1:
function print(callback){
  callback();
}

//example 2: the "message" function is being called inside the "setTimeout" function
const message = function(){
  console.log('print this message')
}
setTimeout(message, 3000)

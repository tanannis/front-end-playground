/*
 Control Flow is the order in which instructions are executed within a program.
 - Conditionals
*/

// example: 
function mathFun() {
  let x = 2 + 3;

  if (x === 3) {
    console.log("we have a 3");
  } else if (x === 4) {
    // this code will run if the above statement is true
    console.log("we have a 4");
  } else if (x === 5) {
    // this code will run if the above statement is true
    console.log("we have a 5");
  }
};

mathFun(); // => "we have a 5"
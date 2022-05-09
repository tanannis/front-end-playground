
/* https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.
*/


// Example: call the function before you declare it in your code.
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}

// Result: "My cat's name is Tiger"

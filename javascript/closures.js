/*
  Closures & Scrope 
  - function decleared or return within an outer function. 
  - this inner function is only accessable within the outer function
*/

// Example:
function climbTree(treeType) {
  let treeString = "You climbed a ";

  function sayClimbTree() {
    // this inner function has access to the variables in the outer scope
    // in which it was defined - including any defined parameters
    return treeString + treeType;
  }

  return sayClimbTree();
}

// We assign the result to a variable
const sayFunction = climbTree("Pine");

// So we can call it, and indeed the variables have been saved in the closure
// and the sayFunction prints out their values.
console.log(sayFunction); // You climbed a Pine
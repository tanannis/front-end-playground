/*
  Pure function
  - Only depends on the arguments passed in it, doesn’t rely on something outside the function
  - No matter how many times you call it, will always give the expected result
  - no side effects
  
  Impure function
  - Mutates variable outside of the function scope, so result is unpredictable (cause side effect)
  
  Side Effect (unpredictable behavior / outcome)
  - When we modify something, we cause side effects 
  - An outside variable being changed by the result of the function
 */


  // Pure function example
  const calculate = (a,b) => {
    return a + b;
  }
  calculate(2, 3) // will always be the same predictable result
  

  // Impure function example
  let c = 10;
  const getResult = (a, b) => {
    c = a + b;
    return a + b;
  }
  getResult(2, 3)
  
/* 
  IIFE: Immediately-Invoked Function Expression 

  It will be invoked ONCE only, right after it has been defined. 
  If need to repeatly run a function, put it inside a while loop and set timeout
*/

// Example:
(function () {
	console.log("run me immediately!");
})();

// => 'run me immediately!'

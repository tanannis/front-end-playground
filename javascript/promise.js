/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   
  A Promise is a returned object with a resolved value OR a rejected value with reason

*/

const myPromise = new Promise((resolve, reject) => {
	if (true) {
		setTimeout(() => {
			resolve("I have succeeded");
		}, 1000);
	} else {
		reject("I have failed");
	}
});

// to access the value
// .then will give you the resolved value
// .catch will give you the rejected value
myPromise
	.then((value) => console.log(value))
	.catch((rejectValue) => console.log(rejectValue));

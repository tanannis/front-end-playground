// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
// console.log("hello world");
// e.preventDefault(); // this prevents the browser from re-directing to the web address provided
// });

document.querySelector(".clear-tasks").addEventListener("click", onclick);

function onclick(e) {
	// console.log("Clicked");

	let val;
	val = e;

	// Event target ele,emt
	val = e.target;
	val = e.target.className;
	val = e.target.classList;

	// e.target.innerText = "Hello";

	//  Event type
	val = e.type; // click

	// Timestamp
	val = e.timeStamp;

	// Coords event relative to the window
	val = e.clientY;
	val = e.clientX;

	// Coords event relative to the element
	val = e.offsetY;
	val = e.clientX;

	console.log(val);
}

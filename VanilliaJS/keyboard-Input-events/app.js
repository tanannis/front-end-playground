const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear input
taskInput.value = "";

form.addEventListener("submit", runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);

// Keydown
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus (click inside the input)
// taskInput.addEventListener("focus", runEvent);

// Blur (click outside the input)
// taskInput.addEventListener("blur", runEvent);

// Cut (right click -> cut)
// taskInput.addEventListener("cut", runEvent);

// Paste (right click -> paste)
// taskInput.addEventListener("paste", runEvent);

// Input (any kind of input event above will fire off)
// taskInput.addEventListener("input", runEvent);

// Change
select.addEventListener("change", runEvent);

function runEvent(e) {
	console.log(`EVENT TYPE: ${e.type}`);

	console.log(e.target.value);

	// heading.innerText = e.target.value;

	// Get input value
	// console.log(taskInput.value);

	// prevents re-direct
	e.preventDefault();
}

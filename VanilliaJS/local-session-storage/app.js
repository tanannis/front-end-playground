// Set local storage item -> the window sotrage object -> stay until you manually clear it out in your settings
localStorage.setItem("name", "John");
localStorage.setItem("age", "30");

// Set session storage item -> will clear out once you close your browser or the session ends
sessionStorage.setItem("name", "Beth");

// remove from storage
// localStorage.removeItem("name");

// get from storage
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

// clear local storage
localStorage.clear();

// console.log(name, age);

// add a submit event here
document.querySelector("form").addEventListener("submit", function (e) {
	const task = document.getElementById("task").value;
	// console.log(task);

	let tasks;

	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		console.log(
			"What is tasks before before parse?",
			typeof localStorage.getItem("tasks")
		); // string

		// since it's a string, we need to convert tasks into JSON Object (array)
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	// now we can add tasks to the array (because array is an JSON object)
	tasks.push(task);

	// covert it back to string format (the array will be formatted as a string)
	localStorage.setItem("tasks", JSON.stringify(tasks));

	alert("Task saved");

	e.preventDefault();
});

// const tasks = JSON.parse(localStorage.getItem("tasks"));

// tasks.forEach(function (task) {
// console.log(task);
// });

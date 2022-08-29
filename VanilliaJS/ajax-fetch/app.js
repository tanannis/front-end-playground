document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getExternalData);

// GET data from local text file
function getText() {
	fetch("text.txt")
		.then((resp) => resp.text())
		.then((data) => {
			// returns the data in text format
			console.log(data);
			document.getElementById("output").innerHTML = data;
		})
		.catch((err) => console.log("Error fetching data ->", err));
}

// GET data from local JSON file
function getJSON() {
	fetch("posts.json")
		.then((resp) => resp.json())
		.then((data) => {
			// returns the data in JSON format
			console.log(data);

			// to show in the browser, the ouput has to be a string
			let output = "";
			data.forEach((post) => {
				output += `<li>${post.title}</li>`;
			});

			document.getElementById("output").innerHTML = output;
		})
		.catch((err) => console.log("Error fetching data ->", err));
}

// GET data from external API
function getExternalData() {
	fetch("https://api.github.com/users")
		.then((resp) => resp.json())
		.then((users) => {
			// returns the data in JSON format
			console.log(users);

			// to show in the browser, the ouput has to be a string
			let output = "";
			users.forEach((user) => {
				output += `<li>${user.login}</li>`;
			});

			document.getElementById("output").innerHTML = output;
		})
		.catch((err) => console.log("Error fetching data ->", err));
}

// Handle Errors
function handleErrors(resp) {
	if (!resp.ok) throw new Error(resp.error);
	return resp;
}

/* 
XmlHttpRequest (XHR) Object
- API in the form of an object
- Provided by the browsers JS environment
- Methods transfer data between client / server
- Can be used with other protocols than HTTP
- Can work with data other than XML(JSON, plain text)

XML
- an old format for making data into string
- was used for packaging information in the Ajax model 
*/

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
	// Create an XHR object
	const xhr = new XMLHttpRequest();

	// OPEN (HttpRequest, file, isAsynchronous)
	xhr.open("GET", "data.txt", true);

	/* older syntax, need to check each state first
  0: request not initialized
  1: server connection established
  2: request received
  3: processing request
  4: request finished and response is ready
  */
	// console.log("READYSTATE", xhr.readyState); // 1
	// xhr.onreadystatechange = function () {
	// console.log("READYSTATE", xhr.readyState); // 2, 3, 4
	// if (this.status === 200 && this.readyState === 4) {
	// console.log(this.responseText);
	// }
	// };

	// Optional - Used for spinners / loaders
	xhr.onprogress = function () {
		console.log("READYSTATE", xhr.readyState, "loading"); // 3
	};

	xhr.onload = function () {
		console.log("READYSTATE", xhr.readyState); // already at 4
		if (this.status === 200) {
			// console.log("200 OK!", this.responseText);
			// get the `output` ele, and assign its innerHTML to a h1 with the data text in it
			document.getElementById(
				"output"
			).innerHTML = `<h1>${this.responseText}</h1>`;
		}
	};

	// will only invoke if there's an error
	xhr.onerror = function () {
		console.log("Request error...");
	};

	// sends the request to the server
	xhr.send();
}

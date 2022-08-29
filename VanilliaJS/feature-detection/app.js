const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

button.addEventListener("click", () => {
	const text = textParagraph.textContent;

	// Check if browser supports the Navigator API. If it does, will get a navigation object
	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(text)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		// if not supported, just show an alert message
		alert("Feature not available, please copy manually!");
	}
});

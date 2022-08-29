/*
Ajax (Asynchronous JavaScript And XML)
- is a method for creating fast and dynamic web pages, SPA
- makes background HTTP requests & handles the response with JavaScript
- it enables to update parts of a web page, without reloading the whole page. e.g. 
only loads the data and not reloading 
-> make async requests in the background
-> no page reload / refresh
-> fetch data
-> very interactive
*/

// example:
async function fetchDataWithAjax() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await response.json();
	placeholder.innerText = JSON.stringify(data);
}

fetchButton.addEventListener("click", () => {
	console.log("CLICKED THE FETCH BUTTON");
	fetchDataWithAjax();
});

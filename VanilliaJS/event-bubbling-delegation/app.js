// EVENT BUBBLING - bubble up events through the DOM
// when you click the child class ".car-title", all its parents will fire up
/*
document.querySelector(".card-title").addEventListener("click", function () {
	console.log("card title");
});

document.querySelector(".card-content").addEventListener("click", function () {
	console.log("card content");
});

document.querySelector(".card").addEventListener("click", function () {
	console.log("card");
});

document.querySelector(".col").addEventListener("click", function () {
	console.log("col");
});
*/

// EVENT DELEGATION (put a listener on one of the parent elements, then use logic inside of the event handler to target the element we want / clicked / whatever event is)

// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
	// console.log(e.target);

	// not a good way to do it
	// if (e.target.parentElement.className === "delete-item secondary-content") {
	// console.log("delete item");
	// }

	// better way to do it: target the parent element and check if it includes the item we want
	if (e.target.parentElement.classList.contains("delete-item")) {
		console.log("delete item");
		e.target.parentElement.parentElement.remove();
	}

	// console.log("delete item");
}

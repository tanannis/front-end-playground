// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
//Parent
const cardAction = document.querySelector(".card-action");

// Replace old heading with a new heading
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className;

// classList give us NOT array but a DOM tokenList that looks like an array of classes
val = link.classList;
val = link.classList[0];

// add and remove classes
link.classList.add("test");
link.classList.remove("test");

val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");

val = link;

console.log(val);

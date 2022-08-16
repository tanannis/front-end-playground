// document.getElementsByClassName;

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
// .querySelector("ul")
// .getElementsByClassName("collection-item");
//
// console.log(listItems);

document.getElementsByTagName;
let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";

// Convert HTML Collection into array so can apply array methods
lis = Array.from(lis);
lis.reverse();
lis.forEach(function (li, index) {
	console.log(li.className);
	li.textContent = `${index}: Hello`;
	// li.innerText = `${index}: Hellowwww`;
});

// console.log(lis);

// document.querySelectorAll;
const items = document.querySelectorAll("ul.collection li.collection-item");

// don't need to convert to array which is good!
items.forEach(function (item, index) {
	item.textContent = `${index}: Hello`;
});

// selects ALL odd children
const liOdd = document.querySelectorAll("li:nth-child(odd)");
// selects ALL even children
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
	li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
	liEven[i].style.background = "#f4f4f4";
}

console.log(items);

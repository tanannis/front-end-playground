// Things that are available to access in the global Document object

let val;

val = document; // referencing to the whole DOM tree object
val = document.all; // get all the elements in DOM
val = document.all[2]; // get element in index 2
val = document.all.length; // shows how many elements are in DOM

// get the elements in DOM
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// get the HTML collection of forms
val = document.forms;
val = document.forms[0]; // get the only one form in the collection
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// get collection of links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; // get collection of classes
val = document.links[0].classList[0];

// get collection of images
val = document.images;

// get collection of scripts
val = document.scripts;
val = document.scripts[2].getAttribute("src"); // get the 'src' attribute

let scripts = document.scripts;

// covert the list into an array
let scriptsArr = Array.from(scripts);

// then we can use the forEach method
scriptsArr.forEach(function (script) {
	console.log(script.getAttribute("src"));
});

console.log(val);

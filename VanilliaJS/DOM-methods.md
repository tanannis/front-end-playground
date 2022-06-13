# Searching the DOM

### getElementById (find nodes with a certain ID attribute)
example: document.getElementById("open-btn");

### getElementByClassName (find nodes with a certain Class attribute)
example: document.getElementByClassName("btn-container")

### getElementByTagName (find nodes with a certain HTML tag)
example: document.getElementByTagName("div")

### querySelector / querySelectorAll (search using CSS selectors)
example: document.querySelector("#btn-container .btn-container:first-child")


## Some methods will return a list / an array-like objects but NOT real arrays. In order to apply array methods, we need to convert them into arrays using one of below methods

const realArr = [].prototype.slice.call(list)

const realArr = Array.from(list)

const realArr = [...list]




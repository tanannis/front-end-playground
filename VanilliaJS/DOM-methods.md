# Searching the DOM

### getElementById 
- find nodes with a certain ID attribute
`document.getElementById("open-btn");`

### getElementByClassName 
- find nodes with a certain Class attribute
`document.getElementByClassName("btn-container")`

### getElementByTagName 
- find nodes with a certain HTML tag
`document.getElementByTagName("div")`

### querySelector / querySelectorAll 
- search using CSS selectors
`document.querySelector("#btn-container .btn-container:first-child")`


## Some methods will return a list / an array-like objects but NOT real arrays. In order to apply array methods, we need to convert them into arrays using one of below methods

const realArr = [].prototype.slice.call(list)

const realArr = Array.from(list)

const realArr = [...list]


### Element.classList
- accessing an element's classes
`document.createElement("div")`

- add a class to an element
`div.classList.add("bar")`

- remove a class from an element
`div.classList.remove("foo")`

- when an element should become visible or hidden once you click it
`div.classList.toggle("visible")`

- replace class "foo" with class "bar"
`div.classList.replace("foo", "bar")`


### Element.innerText
- represents the rendered text content of a node in HTML
e.g. `scoreDisplay.innerText`


### Event.preventDefault
- Use case is to prevent the page from refreshing / redirecting us to another link immediately
because we might want to see a pop up confirmation message / console log something first, because 
# Change DOM


## Changing style attributes
element.style.backgroundColor = "blue"

## Changing CSS Classes
* className attribute is a string of all of a Node's classes
* classList is HTML5 way to modify which classes are on a Node

  document.getElementById("MyElement").classList.add('class');
  
  document.getElementById("MyElement").classList.remove('class');
  
  if (document.getElementById("MyElement").classList.contains('class')) {
    document.getElementById("MyElemen").classList.toggle('class');
  }
  
## Creating Elements
### First, create the element by creating a new one OR cloning an existing one
  document.createElement(tagName);
  node.cloneNode();

### Then, add newly created element to the DOM
* Insert newNode at end of current node: 
  node.appendChild(newNode);

* Insert newNode at start of current node:
  node.prependChild(newNode);

* Insert newNode somehwere in the middle, before a certain childNode:
  node.insertBefore(newNode, sibling);


## Remove Elements
### Removes the oldNode child
* If we have access to the parent node already:
  node.removeChild(oldNode);

* If we don't have access to the parent node, quick hack to find the parent node first:
  oldNode.parentNode.removeChild(oldNode);








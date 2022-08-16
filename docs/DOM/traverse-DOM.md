# Traversing the DOM Tree (a Tree with many children)

All elements are Nodes. No matter where you go, you're still at a Node
- Parent
- Child
- Sibling
All Nodes share similar DOM navigation methods

* A Node can be an element node, an attribute node, a text node, or any other of the node types, see below.

* An XML element is everything from (including) the element's start tag to (including) the element's end tag.

### Node.ELEMENT_NODE (1): 
An element node which is a HTML tag, such as <div>, <p> , etc.

### Node.TEXT_NODE (3): 
The actual text inside an element node

### Node.COMMENT_NODE (8): 
A comment node, such as <!-- ... -->

### Node.DOCUMENT_NODE (9): 
A document node

### Node.DOCUMENT_TYPE_NODE (10): 
A document type node, such as <!DOCTYPE html>

In a nutshell, a node represents a single node in the document tree, and an element is a particular type of node which is a HTML tag.


# What is the difference between children and childNodes in JavaScript?

### .children 
Is a property of an Element 
Only Elements have .children, and these children are all of type Element. 

### .childNodes 
Is a property of Node, can contain any node

* A concrete example would be:
  let el = document.createElement("div");
  el.textContent = "foo";
  
  el.childNodes.length === 1; // Contains a Text node child.
  el.children.length === 0;   // No Element children.

* Most of the time, you want to use .children because generally you don't want to loop over Text or Comment nodes in your DOM manipulation.

* If you do want to manipulate Text nodes, you probably want .textContent instead

### Access children
element.children, element.lastChild, element.firstChild

### Access siblings
element.nextElementSibling, element.previousElementSibling

### Access parent
element.parentElement


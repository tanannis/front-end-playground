# Front-End

## Web Browser

- Is application software for accessing the World Wide Web or a local website.

## SPA (Single Page Application)

- A web application that interacts with the user by dynamically rewriting the current page rather than loading an entire new pages from a server
- No reload or refresh within the user interface
- Uses Ajax

## Session

- An object of storage of cookies to identify the client / server relationship
- Each cookie has a id to identify the client
- Each client / server connection gets its own cookie and store in the server
- If a user visits the website, will check the server to see if a cookie is there
- It's for persist user loggin and web security

## Cookie

- Are used to remember information for later use and to keep track of a website's browsing activities
- The simplest approach to make a cookie with JavaScript is to do it as follows: `document.cookie = "key1 = value1; key2 = value2; expires = date";`

- To delete a cookie, just set an expiration date and time; specifying the correct path of the cookie is a good practice :
  `document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";`

## Viewport

- Is the user's visible area of a web page
- It varies with the device, and will be smaller on a mobile phone than on a computer screen
- HTML5 introduced a method to let web designers take control over the viewport through the `<meta>` tag: <meta name="viewport" content="width=device-width, initial-scale=1.0">
- Use CSS to define `vh` (viewport height) and `vw` (viewport width)
- Use CSS media queries to apply different styling for small and large screens

## You discover that CSS is being loaded on a website using the following code. Why might a web developer have done this?

<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="style.css"></noscript>

- The CSS is being loaded asynchronously in order to prevent render blocking.

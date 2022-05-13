# Front End / Web common terms

## SDLC (Software Development Life Cycle)
- Planning 
- Analysis == defining requirements
- Design
- Implement 
- Test
- Deployment
- Maintenance


### Internet
- the backbone of the Web, the technical infrastructure that makes the Web possible. It is a large network of computers which communiate all together

### Web
- a service built on top of the internet infrastructure
- a Web server (e.g Nginx) is a computer that hosts one or more websites, like a library
- "Hosting" means that all the web pages and their supporting files are available on that computer
#### Process of Loading a Web Page
User -> Web browser -> DNS server -> Web browser -> Server -> Web browser -> User
1. User put web address to browser
2. Web browser send request to DNS Server to find the address
3. DNS Server map domain name to IP address, and send back to web browser
4. Web Browser send request to Server
5. Server send HTML / CSS back to Web Browser to User

### DNS (Domain Name Service)
- is used to map IP address to domain names
- are special servers that match up a web address you type into your browser (like "mozilla.org") to the website's real (IP) address.
- Websites can be reached directly via their IP addresses. You can find the IP address of a website by typing its domain into a tool like IP Checker.

### HTTP (Hypertext Transfer Protocol)
- HTTPS: the "S" stands for "with security"
- is an application protocol that defines a language for clients and servers to speak to each other.
- request / response
- RESTful requests: GET, POST, PUT, DELETE
- In charge of what's in the request/response message such as the web address, the request method, the version, the status code, content type ...
    GET / HTTP / 1.1
    Host: www.example.com

### TCP/IP Server (Transmission Control Protocol/Internet Protocol)
https://whatismyipaddress.com/tcpip-simplified
https://www.thegeekstuff.com/2011/11/tcp-ip-fundamentals/
- is a suite of communication protocols used to interconnect network devices on the internet. 
- is organized in layers/stacks, each layer has a special function.
- it breaks down your messages/data into packets/small chunks and sends them out, then handles the instrcutsions to assemble the datas back together.

### SPA (Single Page Application)
- a web application that interacts with the user by dynamically rewriting the current page rather than loading an entire new pages from a server
- no reload or refresh within the user interface
- uses Ajax

### Session
- an object of storage of cookies to identify the client / server relationship
- each cookie has a id to identify the client
- each client / server connection gets its own cookie and store in the server
- if a user visits the website, will check the server to see if a cookie is there
- it's for persist user loggin and web security

### Route
- the pair of an HTTP verb and a URI is called a route.
- matching them based on a request is called routing.

### Router
- modular, mountable route handlers
- a "mini-app" that nests within an existing app
- lets you break up the major parts of your application into separate modules

### Middleware
- is any code that executes between the server receiving a requet and sending a response. 
- middleware functions typically end by passing control to the next middleware function, rather than by sending a response. It's like a handler / helper function that finishes one specific job only, then passes control to the next function to finish another job

### DOM (Document Object Model)
- is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.
# Router

## Route

- the pair of an HTTP verb and a URI is called a route.
- matching them based on a request is called routing.

## Router

- modular, mountable route handlers
- a "mini-app" that nests within an existing app
- lets you break up the major parts of your application into separate modules

## proxy server

- A proxy server is a system or router that provides a gateway between users and the internet. Therefore, it helps prevent cyber attackers from entering a private network.
- It is a server, referred to as an “intermediary” because it goes between end-users and the web pages they visit online.

## reverse proxy

- A reverse proxy is used to protect servers.
- It accepts a request from a client, forwards the request to another one of many other servers, and returns the results from the server that actually processed the request to the client as if the proxy server had processed the request itself. The client only communicates directly with the reverse proxy server and it does not know that some other server actually processed its request.

## Middleware

- is any code that executes between the server receiving a requet and sending a response.
- middleware functions typically end by passing control to the next middleware function, rather than by sending a response. It's like a handler / helper function that finishes one specific job only, then passes control to the next function to finish another job

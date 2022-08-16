# Internet & The Web

## Internet

- It is a large network of computers which communiate all together
- A global network of interconnected computer networks that uses the TCP/IP (internet protocol suite) to communicate btw network and devices
- Your computer then send requests to servers -> databases etc

## Web

- A collection of different website you can access through the internet

## Web Server

- a service built on top of the internet infrastructure
- a Web server e.g. `Nginx` is a computer that hosts one or more websites, like a library
- "Hosting" means that all the web pages and their supporting files are available on that computer

## Process of Loading a Web Page

User -> Web browser -> DNS server -> Web browser -> Server -> Web browser -> User

1. User put web address to browser
2. Web browser send request to DNS Server to find the address
3. DNS Server map domain name to IP address, and send back to web browser
4. Web Browser send request to Server
5. Server send HTML / CSS back to Web Browser to User

## API (Application Programming Interface)

- It allows other developers to use some of the app’s functionality without sharing the code.
- The endpoints are exposed by the developers while the API can control access with an API key.

## How to improve the performances of your website?

- Use frameworks that build `Single Page Websites`, e.g. React for UI, `Webpack for bundling JS code`, `Babel for compiling JS codes`: instead of keep reloading the HTML, only reload the components
- `Cache the recently visited pages` AND some of the frequently check data so don’t have to keep accessing the Database to recompute
- Apply `Lazy Loading`: load the required content first then the remaining later. E.g. Google image load the top part then bottom ones as scroll down

- `No share hosting`, choose a performance optimized hosting solution
- `Compress data` (image file sizes)
- Cache the the recently visited pages
- `Asynchronous / defer loading for javascript codes` / files : can be excused in any order without having to wait for another task to complete first. A multithreaded model / non blocking architecture

- Use a framework like React with a SPA concept that helps to render components instead of the whole page
- Use a minifying tool / bundler like webpack to compress the JS and CSS files (no space, all one liner… friendly to the browser)
- Maybe use a transcompiler like Babel to convert ES6 JS codes so can be run by older JS engines / websites?

# Protocols

- The instructions for how to pass information back and forth between computers and devices are
  commonly known as protocols:
  `TCP/IP`,
  `HTTPS`,
  `DNS`,
  `SMTP`

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

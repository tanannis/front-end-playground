# Node.js

Node.js is an open-source and cross-platform JavaScript runtime environment. It runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.

## Event Loop

- Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
- Event loop works by making a request to some internal or external "event provider" (that generally blocks the request until an event has arrived), then calls the relevant event handler ("dispatches the event").
- It is also sometimes referred to as the message dispatcher, message loop, message pump, or run loop.

## Message Queue

- A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures. Messages are stored on the queue until they are processed and deleted. Each message is processed only once, by a single consumer.
- A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.
- The processing of functions continues until the stack is once again empty. Then, the `event loop` will process the next message in the queue (if there is one).
- In web browsers, messages are added anytime an event occurs and there is an event listener attached to it.

### The call stack

- The call stack is a LIFO (Last In, First Out) stack.
- The event loop continuously checks the call stack to see if there's any function that needs to run.
- While doing so, it adds any function call it finds in the call stack and executes each one in order.

# React basics

## JSX (JavaScript XML)

- JSX is a JavaSCript syntatic extension. You can write HTML structures in
  the same file as JS code by utilizing JSX.
- Because it avoids the use of complicated JS DOM structures, JSX makes the
  code easier to comprehend and debug

## Virtual DOM

- The Virtual DOM is the lightweight version of the Real DOM that React
  retains in memory.
- When an object's state changes, Virtual DOM updates only that object in
  the real DOM rather than all of them.

## Event

- An event is an action triggered by the user or any system event, like pressing a key, a mouse key, etc.

## Components

Components are the building blocks of a React application that represent a part of the user interface.

- A component used in one area of the application can be reused in another area. This helps speed up the development process.
- A component can contain several other components.
- A component must define a render method that specifies how the component renders to the DOM in its minimal form.
- A component can also receive props. These are properties passed by its parent to specify values.

## State

- Is a object that stores the values of properties belonging to a component that could change over a peroid of time
- State can be changed as a result of a user's action or changes in the network:
  `this.setState()` is used to alter the state object's value. It merges the new and old state and the previous state in a shallow merge.

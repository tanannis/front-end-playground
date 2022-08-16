# Data Formats

https://hackr.io/blog/json-vs-xml

### XML (Extensible Markup Language)

- A markup language that has information wrapped in tags (tags to define elements similar to HTML)
- XML data is stored as a tree structure
- Was designed to `store and transport data`, with focus on `WHAT data is` (but HTML focus on DISPLAY data)
- Can perform processing and formatting documents and objects
- Bulky and slow in parsing, leading to slower data transmission
- Supports many complext data types including charts, images, and other non-primitive data types

### JSON (JavaScript Object Notation)

- A data format written in JavaScript
- Data is stored like a map with key/value pairs
- Doesn't do any processing or computation
- Very fast as the size of file is small, faster parsing by the JS engine so faster transfer of data
- Supports only strings, numbers, arrays, booleans, and objects (objects can only contain primitive types)

### JSON Lines

- Rows of JSON data

### CSV

Is data formatted by commas, everything in CSV is a string

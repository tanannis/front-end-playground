# JavaScript Syntax

- The browser's JS engine defines which JS syntax/version is supported
- Examples: `let`, `const`, `async/await`, `Promises`...
- Check the syntax in below resources to see which browsers support it:
  - MDN JavaScript Web Docs
  - ECMAScript 6 compatibility table: https://kangax.github.io/compat-table/es6/
  - Can I Use: https://caniuse.com/

## Solutions:

https://javascript.info/polyfills

### Transpilers (for new/updated syntaxes)

- A piece of software that translates source code to another source code.
- It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
- A transpiler would analyze our code and rewrite, so the rewritten code is suitable for older JavaScript engines. For example:
  `height ?? 100` into `(height !== undefined && height !== null) ? height : 100`
- Usually, a developer runs the transpiler on their own computer, and then deploys the transpiled code to the server.
- `Babel` is one of the most prominent transpilers out there.
- Modern project build systems, such as `webpack`, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process.

### Polyfills (for missing new functions)

- A script that updates/adds new functions. It “fills in” the gap and adds missing implementations.
- `core js` (`babel-core.js`) that supports a lot, allows to include only needed features.
- `polyfill.io` service that provides a script with polyfills, depending on the features and user’s browser.

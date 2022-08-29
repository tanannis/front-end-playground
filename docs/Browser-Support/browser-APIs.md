# Browser Features (Browser APIs)

- The browsers' development teams decide which features they offer
- Examples: `fetch API`, `geolocation`, `DOM API`... because these are not part of JavaScript and
  were implemented individually
- Make sure the methods used works on all browsers (Internet Explorer doesn't support `fetch()`).
- Check the syntax in below resources to see which browsers support it:
  - MDN JavaScript Web Docs
  - ECMAScript 6 compatibility table: https://kangax.github.io/compat-table/es6/
  - Can I Use: https://caniuse.com/

## Solution

### Feature Detection & Fallbacks

Provide 2 branches based on if the feature works or not.

- For example, use `fetch()` check if available ("not undefined")
  - if available, execute code and use feature
  - else, execute fallback code / show alert error message
- Use transpilers like `webpack` and `babel` (`babel-loader`, `@babel/preset-env`) in `webpack.config`, in `package.json`, set `"browsersList": "> 0.2%, not dead"`
- Combine using transpilers + polyfills
- It's very important to install / config to only the support you need because polyfills can be huge and comes with features that you don't need

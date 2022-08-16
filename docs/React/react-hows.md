# React Hows

## How to modify a DOM element in React?

- You shouldn't modify a DOM element directly because you just just let React what know you want and it will do that for you, otherwise it defeats the purpose of using React. So instead of modifying the DOM element directly, we can modify the State. For example: Define the initial state, then modify using `this.setState` or `useState()`.
- However if you really need modify the DOM, you can use the `useRef()` hook
  https://www.youtube.com/watch?v=8YNeCyQtPo0&t=920s

## How to avoid React Component Re-Renderings

1. Memoization using `useMemo()` and `useCallback` hooks. These hooks reduce re-rendering by caching and returning the same result if the inputs are the same without any computations. When the inputs change, the cache gets invalidated and the new componenet state gets rendered.

- `useMemo()` cache the result
- `useCallback()` memoize the call back function e.g. will not re-render if the user clicks the same button again and again.

2. Use `useRef()` if need to track internal state changes e.g. a counter that will be incremented
3. Use React Fragments to wrap the components to reduce the load on the DOM, resulting in faster rendering times and decreased memory usage (no need to create an extra DOM node)

- <React.Fragment> or simply `<>`

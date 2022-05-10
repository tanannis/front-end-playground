# Functional Components
- No lifecycles
- Only side effects
- Use pure functions
- Whenever argument props / state changes, the whole function will re-run / re-render

### useState (set state)
- same as class component's `this.setState()`

### useEffect (use side effect)
- Fetching inside useEffect prevents fetching API re-render in a infinite loop

### useContext (Context APIs)
- It is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”
- Context APIs enable us to define the context Object which stores some data and will make it available throughout the hierarchy without passing the data as props. It provides a container containing some data and making it available to the entire hierarchy of components below.

### useMemo (use memoization)
- It allows you to memoize expensive functions so that you can avoid calling them on every render. Simply pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
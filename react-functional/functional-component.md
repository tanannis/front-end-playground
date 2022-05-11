# Functional Components
- No lifecycles
- Only side effects
- Use pure functions
- Whenever argument props / state changes, the whole function will re-run / re-render

### useState (set state)
- same as class component's `this.setState()`

### useEffect (use side effect)
- Fetching inside useEffect prevents fetching API re-render in a infinite loop

### useContext (use Context APIs)
- It is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”
- It uses the Context API that is built into React, which enable us to define the context Object which stores some data and will make it available throughout the hierarchy without passing the data as props.
- Similar concept with JS's "global variables"

There are four steps to using React context:
1. Create context using the createContext method.
2. Take your created context and wrap the context provider around your component tree.
3. Put any value you like on your context provider using the value prop.
4. Read that value within any component by using the context consumer.

### useMemo (use memoization)
- It allows you to memoize expensive functions so that you can avoid calling them on every render. Simply pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
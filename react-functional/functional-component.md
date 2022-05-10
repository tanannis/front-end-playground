# Functional Components
- No lifecycles
- Only side effects
- Use pure functions
- Whenever argument props / state changes, the whole function will re-run / re-render

### useState
- same as class component's `this.setState()`

### useEffect (use side effect)
- Fetching inside useEffect prevents fetching API re-render in a infinite loop

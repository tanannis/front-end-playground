# Class Component Lifecycle Methods

## The order React runs
1. Constructor
2. Render - initial rendering, determines what to show in UI
3. componentDidMount : mount to DOM
4. Render - If the state in constructor changed, re-render and show in UI
5. componentDidUpdate 
6. componentWillUnmount: unmounting, unsubscribe  e.g. clean cache

### Render
- Renders whenever state changes
- Renders whenever props get updated

### ComponentDidMount
- Only happens once
- Asynchronously Fetch api for data

### ComponentDidUpdate
- is invoked immediately after updating occurs, detects updates by comparing current props and prev props.
- You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition:
```
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```


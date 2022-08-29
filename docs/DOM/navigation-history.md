## History API

`history.back()`

- causes the browser to move back one page in the session history (go back to the previous page)

`history.forward()`

- causes the browser to move forward one page in the session history (go to the next
  page from a previous page)

`history.go(delta)`

- loads a specific page from the session history
- can be used to move forwards and backwards through the history depending on the value of `delta` (The position in the history to which you want to move, relative to the current page. A negative value moves backwards, a positive value moves forwards.)
- For example:
  `history.go(1)` moves forward accrdoing to `history.length`
  `history.go(-1)` moves backward

`history.state`

- returns a value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a popstate event.

## Navigator

The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

`navigator.userAgent`

- check which browser the user is using, e.g. Chrome, Mozilla, Safari...but not super reliable

`navigator.geolocation.getCurrentPosition()`

- can find out the user's location

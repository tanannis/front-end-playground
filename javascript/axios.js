/* 
https://blog.logrocket.com/axios-vs-fetch-best-http-requests/#:~:text=Without%20question%2C%20some%20developers%20prefer,available%20in%20all%20modern%20browsers.

Axios
  - a JS libary used to make HTTP requests from node.js or XMLHttpRequests from the 
  browser
  - a promise based HTTP client that automatically converts the data to JSON, so 
  you don’t have to
  - it makes it easy to send asynchronous HTTP requests to REST endpoints and 
  perform CRUD operations
  - it can be used in plain JavaScript or with a library such as Vue or React
*/

// example JSON data transformation
axios.get('https://api.github.com/orgs/axios')
  .then(response => {
    console.log(response.data);
  }, error => {
    console.log(error);
  });


// axios example
const url = 'https://jsonplaceholder.typicode.com/posts'
const data = {
  a: 10,
  b: 20,
};
axios
  .post(url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({data}) => {
    console.log(data);
});


// example setting timeout in milliseconds
axios({
  method: 'post',
  url: '/login',
  timeout: 4000,    // 4 seconds timeout
  data: {
    firstName: 'David',
    lastName: 'Pollock'
  }
})
.then(response => {/* handle the response */})
.catch(error => console.error('timeout exceeded'))


// example intercept HTTP requests to examine or change HTTP requests from your application to the server or vice versa (e.g., logging, authentication, or retrying a failed HTTP request).
axios.interceptors.request.use(config => {
  // log a message before any HTTP request is sent
  console.log('Request was sent');

  return config;
});

// sent a GET request
axios.get('https://api.github.com/users/sideshowbarker')
  .then(response => {
    console.log(response.data);
  });

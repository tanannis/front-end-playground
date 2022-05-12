/* 
React is the engine of how the applications are built.
ReactDom manages DOM elements of the web page, by providing an API 
containing methods like render(), findDOMNode().
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// "root" is inside the index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The strictMode gives warnings in case we use old deprecated codes that React doesn't support anymore
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

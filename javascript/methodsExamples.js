/* Fetch data from API
import fetch from "node-fetch";
const fetch = require("node-fetch");
*/
const API_URL = "https://edge.curalate.com/v1/media/rxrMgfeOnjhKCSVd?limit=15";
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed fetching data: ", error);
  }
}
fetchData();


/* Map method  */
const array = [1, 4, 9, 16];
const map1 = array.map(x => x * 2);


/* Filter Method -> filter((ele, index) => .... ) */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);


/* Reduce Method */
const nums = [1, 2, 3, 4];
let sum = nums.reduce((prev, current) => prev + current, 0)


/* For Each  */
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));



/* setInterval(function, sec) */
setInterval( () => {
  // body of the function
}, 1000);



/* Set Time Out */
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);



/* Parses data (JSON string), return JS Object */
const jsonStr = '{"result":true, "count":42}';
const obj = JSON.parse(jsonStr);
console.log(obj.count);  // 42


/* Converts a JS object / value to a JSON string */
const string = JSON.stringify({ x: 5, y: 6 });
console.log(string) // "{"x":5,"y":6}"


/* Promise */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

const getPromise = async () => {
  try {
    const result = await myPromise;
    return result;
  } catch (error) {
    console.log("Failed returning promise: ", error);
  }
}
getPromise();
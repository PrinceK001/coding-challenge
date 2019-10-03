// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `
<h1>Interview Questions - Preparation</h1>
<ol>
  <li>Fizz, buzz and fizzbuzz</li>
  <li>Fibonacci Series</li>
</ol>`;

// 1st fizz, buzz and fizz buzz
// const printData = { "3": "fizz", "5": "buzz" };
// const boundaries = { start: 1, end: 30 };
// const printer = (data, boundaryDecider) => {
//   const keys = Object.keys(data);
//   for (let i = boundaryDecider.start; i <= boundaryDecider.end; i++) {
//     let str = "";
//     keys.forEach((ele, index) => {
//       if (i % ele == 0) {
//         str += printData[ele];
//       }
//     });
//     str ? console.log(str) : console.log("i = ", i);
//   }
// };
// printer(printData, boundaries);

// fibonacci series
let sum = 0, limit = 100 ;
const fibonacciPrinter = (last, secondLast) => {
  sum = last + secondLast;
  console.log(sum);
  if(limit>sum){
    fibonacciPrinter(sum, last);
  }
}
fibonacciPrinter(0, 1);


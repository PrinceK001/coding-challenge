// Import stylesheets
import "./style.css";

const appDiv = document.getElementById("app");
appDiv.innerHTML = `
<h1>Interview Questions - Preparation</h1>
<ol>
  <li>Fizz, buzz and fizzbuzz</li>
  <li>Fibonacci series</li>
  <li>Reverse a string</li>
  <li>Palindrome</li>
</ol>`;

// 1 fizz, buzz and fizz buzz
const printData = { "3": "fizz", "5": "buzz" };
const boundaries = { start: 1, end: 30 };
const printer = (data, boundaryDecider) => {
  const keys = Object.keys(data);
  for (let i = boundaryDecider.start; i <= boundaryDecider.end; i++) {
    let str = "";
    keys.forEach((ele, index) => {
      if (i % ele == 0) {
        str += printData[ele];
      }
    });
    str ? console.log(str) : console.log("i = ", i);
  }
};
printer(printData, boundaries);

//2 fibonacci series
let sum = 0, limit = 100 ;
const fibonacciPrinter = (last, secondLast) => {
  sum = last + secondLast;
  console.log(sum);
  if(limit>sum){
    fibonacciPrinter(sum, last);
  }
}
fibonacciPrinter(0, 1);

//3 a. reverse a string
const reverseItOne = (text) => {
  return text.split('').reverse().join('');
};
console.log(reverseItOne('test!'));

//3 b. reverse without reverse function
const reverseIt = (text) => {
  let str = '', i = text.length-1;
  for(i; i>-1; i--){
    str += text[i];
  }
  return str;
}
console.log(reverseIt('test!'));

//4. can also develop palindrome function over it
console.log('ollo' == reverseItOne('ollo'));
console.log('test' == reverseItOne('test'));
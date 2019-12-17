// Import stylesheets
import "./style.css";
import "./fizz-buzz";
import "./fibonacci";
import "./reverse";
import "./palindrome";
import "./sum-upto-n";

const appDiv = document.getElementById("app");
appDiv.innerHTML = `
<h1>Coding Challenge</h1>
<div class = "list">'
  <ol id="type-list"></ol>
</div>`;
const quesList = ['Fizz, buzz and fizzbuzz', 'Fibonacci series', 'Reverse a string', 'Palindrome', 'Sum upto N', 'Average of pair', 'Duplicate finder', 'Frequency finder', 'Steps Calculator', 'Max Sub Array Sum', 'Sequence Finder'];
const olElem = document.getElementById('type-list');
quesList.forEach((text, i)=>{
  const newEle = document.createElement('li');
  newEle.textContent = text;
  olElem.appendChild(newEle);
});

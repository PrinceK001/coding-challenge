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
const quesList = ['Fizz, Buzz and Fizzbuzz', 'Fibonacci Series', 'Reverse a String', 'Palindrome', 'Sum upto N', 'Average of Pair', 'Duplicate Finder', 'Frequency Finder', 'Steps Calculator', 'Max Sub Array Sum', 'Sequence Finder', 'Unique Elements Finder'];
const olElem = document.getElementById('type-list');
quesList.forEach((text, i)=>{
  const newEle = document.createElement('li');
  newEle.textContent = text;
  olElem.appendChild(newEle);
});

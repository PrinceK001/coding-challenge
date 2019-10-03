// Import stylesheets
import "./style.css";
import "./fizz-buzz";
import "./fibonacci";
import "./reverse";
import "./palindrome";
import "./amazon";

const appDiv = document.getElementById("app");
appDiv.innerHTML = `
<h1>Interview Questions - Preparation</h1>
<div class = "list">'
  <ol id="type-list"></ol>
</div>`;
const quesList = ['Fizz, buzz and fizzbuzz', 'Fibonacci series', 'Reverse a string', 'Palindrome', 'Amazon'];
const olElem = document.getElementById('type-list');
quesList.forEach((text, i)=>{
  const newEle = document.createElement('li');
  const newTextEle = document.createTextNode(text);
  newEle.appendChild(newTextEle);
  olElem.appendChild(newEle);
});

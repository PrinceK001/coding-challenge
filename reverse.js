//Reverse a given string

//using reverse function
const reverseItOne = (text) => {
  return text.split('').reverse().join('');
};
console.log(reverseItOne('test!'));

//without using reverse function
const reverseItTwo = (text) => {
  let str = '', i = text.length-1;
  for(i; i>-1; i--){
    str += text[i];
  }
  return str;
}
console.log(reverseItTwo('test!'));

module.exports = {
  reverseItOne,
  reverseItTwo
};
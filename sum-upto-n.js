/*
* sum(1)(2)(3)...(n)();
* above function should return sum from 1 to n
*/
const sumReturn = (sum) => {
    return (nextNum) => {
      if(nextNum){
        console.log('next cycle -------------------------', nextNum);
        return sumReturn(sum+nextNum);
      } else {
        return sum;
      } 
    }
}
console.log(sumReturn(1)(2)(3)(4)());


// or shorthand version
const sumReturn = sum => nextNum => nextNum ? sumReturn(sum+nextNum):sum;
console.log(sumReturn(1)(2)(3)(4)());
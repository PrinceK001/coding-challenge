//fibonacci series

let sum = 0, limit = 100 ;
const fibonacciPrinter = (last, secondLast) => {
  sum = last + secondLast;
  console.log(sum);
  if(limit>sum){
    fibonacciPrinter(sum, last);
  }
}
fibonacciPrinter(0, 1);
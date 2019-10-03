/* 
if a number between 1 and 30 is multiple of 3 print - fizz and 
if that is multiple of 5 print buzz and
if that is multiple of 3 and 5 print fizzbuzz
*/

//this could be simpler but this one is generic approach 
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
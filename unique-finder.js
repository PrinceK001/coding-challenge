/*
Finding all the unique elements in a given sorted array
countUniqueValues([1,2,3,4,5]) //5
countUniqueValues([1,2,2,3,4,5,5]) //5
countUniqueValues([]) //0
countUniqueValues([1,2,5,5]) //3
*/

//time complexity - O(n), space complexity O(n)
function countUniqueValues(arr){
  if(!arr || !arr.length) return 0;
  let ctrObj = {}, uniqueCtr = 0;
  for(let ele of arr){
    if(ctrObj[ele]===undefined){
      ctrObj[ele] = 1;
      uniqueCtr++;
    }
  }
  return uniqueCtr;
}
countUniqueValues([1,2,3,4,4,5,5])


//time complexity - O(n), space complexity O(1)
function countUniqueValues(arr){
  if(!arr || !arr.length) return 0;
  let ptrOne = 0, ctr = 0;
  for(let ptrTwo = 1; ptrTwo < arr.length; ptrTwo++){
    if(arr[ptrOne]!=arr[ptrTwo]){
      ptrOne = ptrTwo;
      ctr++;
    }
  }
  return ctr+1;
}
countUniqueValues([1,2,3,4,4,5,5]);
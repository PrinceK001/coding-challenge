/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
maxSubarraySum([100, 200, 300, 400], 2) = 700
maxSubarraySum([-3,4,0,-2,6,-1], 2) = 700
maxSubarraySum([1,5,6,8,1,3,4,5], 3) = 19
*/

function maxSubarraySum(arr, subArrLen){
    if(!arr || !subArrLen || arr.length<subArrLen) return null;
    let maxSum = 0, firstSlider = 0, secondSlider = 0;
    while(secondSlider<subArrLen){
        maxSum+=arr[secondSlider];
        secondSlider++
    }
    let tempSum = maxSum;
    while(secondSlider<arr.length){
        tempSum = tempSum - arr[firstSlider] + arr[secondSlider];
        maxSum = Math.max(maxSum, tempSum);
        firstSlider++;
        secondSlider++;
    }
    return maxSum;
}
maxSubarraySum([1,5,6,8,1,3,4,5], 3);
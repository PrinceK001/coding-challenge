/*
Given an array, determine if an array has any duplicate element
*/

function areThereDuplicates(...args) {
    if(args.length<2) return false;
    let result = {};
    for(let num of args){
        if(result[num]){
            return num;
        } else {
            result[num] = 1;
        }
    }
    return false;
}
areThereDuplicates(1,2,4,5,6,8,7,3,2);
//result 2
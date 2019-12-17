//given two input numbers, determine if both have same ferquency of digits 
/*
for e.g. 
12231 and 31212 = true
12231 and 312121 = false 
122311 and 31212 = false 
626 and 266 = true
*/

function sameFrequency(num1, num2){
    let result = {};
    num1 = String(num1).split('');
    num2 = String(num2).split('');
    if(num1.length !== num2.length) return null;
    for(let digit of num1){
        if(result[digit]) {
            result[digit]++
        } else {
            result[digit] = 1;
        }
    }
    for(let digit of num2){
        if(result[digit]) {
            result[digit]--
        } else {
            return null;
        }
    }
    return true;
}
sameFrequency(1222341, 1231224);

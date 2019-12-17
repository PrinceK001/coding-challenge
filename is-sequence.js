/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

isSubsequence('held' , 'hello world') // true
isSubsequence('sing' , 'sting') // true
isSubsequence('dabra' , 'abracadabra') // true
isSubsequence('acb' , 'abc') //false 'order matters'
*/

function isSubsequence(sub, main) {
    if(!sub || !main || (sub.length>main.length)) return false;
    let tracer = 0;
    for (let i = 0; i<main.length; i++){
        if(main[i] == sub[tracer]){
            tracer++
            if(tracer == sub.length){
                return true;
            }
        }
    }
    return false;
}

isSubsequence('sing', 'sting');
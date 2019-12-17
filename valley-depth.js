/*
Assuming John is a climber and he starts his journey at plain surface...each step he takes upwards is denoted by U and and downards is denoted by D.

Given a string of his foot movemets determine where John is at the end of his journey...
Above ground level or below ground level ?
*/

var steps = 'DDUUDUUUDD'; 

function fun(){
    var valleysCtr = 0, level = 0;
    var counted = false;
    for(var i = 0; i < steps.length; i++){
        var currStep = steps[i];
        if(level==0){
            counted = false;
        }
        if(currStep=='U') {
            level++;
        } else if(currStep=='D'){
            level--;
            if(level<0 && !counted){
                valleysCtr++
                counted = true;
            }
        }
    }
    return [level, valleysCtr];
}

fun();
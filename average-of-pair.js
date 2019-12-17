/*
write a function averagePair which will accept two arguments 
1. arr - a sorted array of integers
2. avg - a integer value
*/

/*
Given a sorted array determine a successive pair which yeild the required avg
e.g. 
averagePair([1,2,3,4], 2.5) =  [2,3]
averagePair([1,2,3,4,8], 4.5 ) = false (because there is no consecutive numbers yeilding 4.5 average)
averagePair([3], 3) = false
*/

function averagePair(arr, avg){
    if(arr.length<2) return false;
    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        let mid = Math.floor((start+end)/2);
        let currAvg = (arr[mid]+arr[mid+1])/2;
        if(currAvg == avg){
            return [arr[mid], arr[mid+1]];
        } else if(currAvg > avg) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

averagePair([1,2,4,5,6,7,8,10], 9);
//result [8, 10]

/*
Given a sorted array determine "first" pair which yeild the required avg
e.g. 
averagePair([1,2,3,4], 2.5) =  [1,4]
averagePair([1,2,3,4,8], 4.5 ) = [1,8] (because there is no consecutive numbers yeilding 4.5 average)
averagePair([3], 3) = false
*/

function averagePair(arr, avg){
    if(arr.length<2) return false;
    let currAvg = 0;
    let ptrOne = 0, ptrTwo = arr.length -1;
    while(ptrOne < ptrTwo){
        let newAvg = (arr[ptrOne] + arr[ptrTwo])/2;
        if(newAvg == avg) {
            return [arr[ptrOne], arr[ptrTwo]]
        } else if (newAvg < avg) {
            ptrOne++;
        } else {
            ptrTwo--;
        }
    }
}
averagePair([1,2,3,4,4,5,7,8,10], 7);
//result [4,10]





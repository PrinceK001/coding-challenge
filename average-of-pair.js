/*
Given a srorted array determine a successive pair which yeild the required avg
for e.g.
findAvg([1,3,4,5,6,7,8], 5.5) 
result [5,6] because this two succesive values pair return required avg
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
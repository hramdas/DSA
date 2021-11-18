let arr = [1, 3, 4, 5, 7, 8, 9]

let num = 3


// Binary Search => if arr is sorted = [log(n)] : [n log(n)]
function Search(arr, num){
    var l=0; var h = arr.length-1
    while(l<=h){
        var mid = Math.floor(l + (h-l)/2)
    
        if(arr[mid] === num) return true;
        if(arr[mid] > num){h = mid-1
        } else l = mid+1
    } return false
}
console.log(Search(arr, num))

//Linear Search [n]  == if arr not sorted
function LinSearch(arr, num){
    for(let i=0; i<=arr.length; i++){
        if(arr[i] === num) return true
    } return false
}
console.log(LinSearch(arr, num))


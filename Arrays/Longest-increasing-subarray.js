const arr = [1, 2, 1, 2, 3, 1], n = arr.length
console.log("longest: ", longest(arr, n))

function longest(arr, n){
    var lis = Array(n).fill(1)
    for(let i=1;i<n; i++){
        if(arr[i] > arr[i-1]){
            lis[i] += lis[i-1]
        }
    }
    let res = Math.max(...lis)
    return res
}

  
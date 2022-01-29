countLargestGroup = function(n) {
    if(n<10) return n
    var arr = [[1], [2],[3],[4],[5],[6],[7],[8],[9]]

    for(let i=10 ;i<=n; i++){
        let sum = 0
        let val = i
        while(val){
            sum+=i%10
            val = Math.floor(val/10)
        }
        arr[sum].push(i)
    }
    arr.sort((a,b)=>b.length - a.length)
    count = 1
    let len = arr[0].length

    for(let i=1; i<arr.length; i++){
        if(arr[i].length == len) count++
        else return count
    }
};

var n = 13
console.log(countLargestGroup(n))
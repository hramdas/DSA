n = 5
array= [1,2,3,5]
console.log(MissingNumber(array,n))

function MissingNumber(array,n){
    var sum = 0
     for(let i=1; i<=n; i++){
        sum+=i
    }
    
    var real = 0;
     for(let i=0; i<array.length; i++){
        real+=array[i]
    }
    var res = sum - real
    return res
}
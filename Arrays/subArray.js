// let arr = [1, 2, 3, 4]
let arr = "ABCD"
let col = []

function subArray(n){

    for(let i = 0; i < n; i++)
    {
        for(let j = i; j < n; j++)
        {
            let subseq = []
            for(let k = i; k <= j; k++){
               subseq.push(arr[k])
            }
            col.push(subseq)
        }
    }
}

subArray(arr.length)
console.log(col)
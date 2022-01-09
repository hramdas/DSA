let arr = [1, 2, 3];
// let arr = 'abcd'
let col = []
subSequence(arr, 0, arr.length)

function subSequence(arr, l, h){

    if(col.length > 0){
        console.log(col)
    }
    for(var i=l; i<h; i++){
        col.push(arr[i])
        subSequence(arr, i+1, h)
        col.pop()
    }
}
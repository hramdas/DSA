function permutation(arr, cur, n){
  if(cur === n-1 ){
      col.push(arr)
      console.log(arr.join(' '))
  }

///arr.sort
  
  for(let i=cur; i<n; i++){
      swap(arr, i, cur)
      permutation(arr, cur+1, n)
     swap(arr, i, cur)
  }
}

function swap(arr, i, j){
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}    

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
  
    col = []
   permutation(arr, 0, n)
   console.log(col)
  //  col.map(e=>console.log(e.join(' ')))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    1 2 3`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  
function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    let line=1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        console.log(longest(arr, n))
    }
}
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
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
    `);
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
  
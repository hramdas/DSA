function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line =1
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        console.log(abSum(arr, n-1))
    }
}
function abSum(arr, n){
    if(0>=n) return 0
    return (Math.abs(arr[n] - arr[n-1]) + abSum(arr, n-1))

    //1 5 2
    //(5-2) = 3 + (5-1) = 7

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
  
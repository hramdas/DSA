function runProgram(input) {
    var n = +input.trim()
    console.log(fib(n))
}
function fib(n){
    if(n==0 || n==1) return n
    return fib(n-1)+fib(n-2)

    // f3  +  f2
    //f2 +1   1+0
    // 1+0
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4`);
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
  
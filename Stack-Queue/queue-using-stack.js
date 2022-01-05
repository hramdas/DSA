//https://oj.masaischool.com/contest/2740/problem/5-1

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1`);
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
  
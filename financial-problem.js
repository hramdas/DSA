//https://jscodesample.blogspot.com/2022/01/solve-financial-problem.html

function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)

        console.log(arr, n)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    6
    100 60 70 65 80 85`);
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
  
function runProgram(input) {
    input = input.trim().split(' ').map(Number)
    var n = input[0]
    var r = input[1]

    console.log(gp(n, r).toFixed(4))
}

function gp(n, r){
    if(n<0) return 0

    return (1/Math.pow(r, n)) + gp(n-1, r)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 5`);
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
  
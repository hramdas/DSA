function runProgram(input) {
    var n = +input.trim()
    console.log(fact(n))
   
}
function fact(n){
    if(n === 1) return 1
    return n*fact(n-1)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5`);
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
  
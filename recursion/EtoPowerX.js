function runProgram(input) {
    input = input.trim().split(' ').map(Number)
    var x = +input[0]
    var n = +input[1]
   
    var res = xpower(x, n)
    console.log(res.toFixed(4))
}
  function xpower(x, n){
      if(n<0) return 0
      if(n == 0) return 1;

      return (Math.pow(x, n)/fact(n)) + xpower(x, n-1)
  }

  function fact(n){
    if(n==0 || n==1) return 1
    return n*fact(n-1)
  }

if (process.env.USERNAME === "hedga") {
    runProgram(`4 2`);
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
  
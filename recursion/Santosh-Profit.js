function profit(n){
  if(n == 0) return 1
  if(n < 0) return 0
  return profit(n-4) + profit(n-8)

         //12
  // 8            //4
  //4  //0      //0   //-4
  //0
}

function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    var cases = input[0]
   for(let i=1; i<=cases; i++){
       var n = input[i]
      console.log(profit(n))
   }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    12`);
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
  
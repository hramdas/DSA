function runProgram(input) {
    var str = input.trim().split('')
    var n = 0
    //console.log(str[11], str[0])
     console.log(strLength(str, n))
}

function strLength(str, n){

    if(str[n] == undefined){
        return 0
    } else return 1 + strLength(str, n+1)

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`masaischool`);
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
  
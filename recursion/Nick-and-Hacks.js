function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    var n = +input[0]

    for(let i=1; i<=n; i++){
        var num = input[i]
        var res = hackes(num, 1)
        res == true ? console.log("Yes") : console.log("No")
    }
}

function hackes(num, k){
    if(num == k) return true;
    if(k > num) return false;

    if(hackes(num, k*10) == true || hackes(num, k*20) == true) return true;
    return false;
}

if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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


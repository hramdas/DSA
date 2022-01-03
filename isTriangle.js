function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()

    for(var i=1; i<=n ;i++){
        var arr = input[i].trim().split(' ').map(Number)
        a = arr[0]
        b = arr[1]
        c = arr[2]

        if(a+b>c && b+c>a && a+c>b){
            console.log('Yes')
        } else  console.log('No')
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    `);
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
  
function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var str = input[1].trim()
    var sub = ''
    subseq(str,0, n, sub)
}
function subseq(str, cur, n, sub){
    if(sub.length > 0){
        console.log(sub)
    }

    for(var i=cur; i<n; i++){
        sub+=str[i]
        subseq(str, i+1, n, sub)
        sub = sub.split('')
        sub.pop()
        sub = sub.join('')
    }
}
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    abcd`);
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
  
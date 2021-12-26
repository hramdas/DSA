function superDigit(n){
  if(n < 10) return n

  n = n.toString().split('').map(Number)   
  digit = n.reduce((a,b)=>a+b, 0)  //sum of all digits

  return superDigit(digit)
}

function runProgram(input) {
    input = input.trim().split(' ')
    var n = input[0].trim()
    var k = +input[1].trim()

    if(n.length > 1){
        //number to string and arr of nuumber
        n = n.toString().split('').map(Number)
        n = n.reduce((a,b)=>a+b, 0)  //sum of all digits
        n = n*k
    }

    console.log(superDigit(n))
}

  
if (process.env.USERNAME === "hedga") {
    runProgram(`123 3`);
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
  
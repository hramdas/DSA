function runProgram(input) {
  str = input.trim().split("");
  var res = [];
  var q = [];
  for (let i = 0; i < str.length; i++) {}
}

if (process.env.USERNAME === "hedga") {
  runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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

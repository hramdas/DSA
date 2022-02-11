function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(makeEven(arr, n));
  }
}

function makeEven(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {}
  return "NO";
  //   if (sum % 2 == 0) return "YES";
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
1
0
3
1 5 3 `);
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

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);

    console.log(minSwaps(arr, n));
  }
}
function minSwaps(arr, n) {}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
5
1 0 1 0 1 `);
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

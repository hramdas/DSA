function kDiff(arr, n, k) {}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);

    let arr = input[line++].trim().split(" ").map(Number);
    console.log(kDiff(arr, n, k));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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

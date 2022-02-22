function runProgram(input) {
  var n = +input.trim();
  console.log(ways(n));
}

function ways(n) {
  let count = new Array(n + 1);
  count[0] = 1;
  if (n >= 1) count[1] = 1;
  if (n >= 2) count[2] = 2;

  for (let i = 3; i <= n; i++) {
    count[i] = count[i - 1] + count[i - 2] + count[i - 3];
  }
  return count[n];
}

if (process.env.USERNAME === "hedga") {
  runProgram(`4`);
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

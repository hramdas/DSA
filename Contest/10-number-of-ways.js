function ways(n) {
  let st = new Array(n + 1);
  st[0] = 1;
  if (n >= 1) st[1] = 1;
  if (n >= 2) st[2] = 2;

  for (let i = 3; i <= n; i++) {
    st[i] = st[i - 1] + st[i - 2] + st[i - 3];
  }
  return st[n];
}

function runProgram(input) {
  var n = +input.trim();
  console.log(ways(n));
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

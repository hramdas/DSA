function runProgram(input) {
  var n = +input.trim();
  console.log(fib(n));
}
function fib(n) {
  let st = new Array(n + 2);
  st[0] = 0;
  st[1] = 1;
  for (let i = 2; i <= n; i++) {
    st[i] = +st[i - 1] + +st[i - 2];
  }
  return st[n];
  //   if (st[n] !== -1) {
  //     console.log(st);
  //     return st[n];
  //   } else {
  //     st[n] = fib(n - 1) + fib(n - 2);
  //     return st[n];
  //   }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5`);
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

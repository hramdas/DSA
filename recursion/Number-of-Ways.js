function runProgram(input) {
  var n = +input.trim();
  console.log(ways(n));
}
function ways(n) {
  let arr = new Array(n + 1);

  arr[0] = 1;
  if (n >= 1) arr[1] = 1;
  if (n >= 2) arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];

  // if (n < 0) return 0;
  // if (n === 0) return 1;

  // return ways(n - 1) + ways(n - 2) + ways(n - 3);

  //3 2 1
  //2 1 0               1 0 -1 |  0
  // 1 0 -1   0   0         0 0 |  0
  //  2       1   1          2    1
  // 7
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

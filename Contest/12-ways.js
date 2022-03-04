function ways(n, dp) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if (dp[n] !== -1) return dp[n];
  else {
    dp[n] = ways(n - 1, dp) + ways(n - 2, dp) + ways(n - 3, dp);
    return dp[n];
  }
  //   if (n == 0) return 1;
  //   if (n < 0) return 0;
  //   return ways(n - 1, dp) + ways(n - 2, dp) + ways(n - 3, dp);
}

function runProgram(input) {
  var n = +input.trim();
  let dp = Array(n + 1).fill(-1);
  dp[0] = 1;
  console.log(ways(n, dp));
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

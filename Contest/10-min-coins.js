function runProgram(input) {
  input = input.trim().split("\n");
  var [n, m] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => b - a);
  console.log(minCoins(arr, n, m));
}
function minCoins(arr, n, m) {
  let dp = new Array(m + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  let res = Number.MAX_VALUE;

  for (let i = 1; i <= m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] <= i) {
        let val = dp[i - arr[j]];
        if (val !== Number.MAX_VALUE && val + 1 < dp[i]) dp[i] = val + 1;
      }
    }
  }

  if (dp[m] == Number.MAX_VALUE) return -1;
  return dp[m];
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3 11
1 5 7`);
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

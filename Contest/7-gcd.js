function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  for (let i = 1; i <= n; i++) {
    let [a, b] = input[i].trim().split(" ").map(Number);
    console.log(GretestCommonDivisor(a, b));
  }
}
function GretestCommonDivisor(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (a == 0) return b;
  if (b == 0) return a;
  if (a == b) return a;

  if (max % min == 0 || a == b) return min;
  if (a > b) return GretestCommonDivisor(a - b, b);
  return GretestCommonDivisor(a, b - a);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
6 9
25 250`);
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

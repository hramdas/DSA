function greatesCommanDiv(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (max % min == 0) return min;
  if (min == 1) return 1;
  else return greatesCommanDiv(min, max - min);
}
function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  for (let i = 1; i <= n; i++) {
    var [a, b] = input[i].trim().split(" ").map(Number);
    console.log(greatesCommanDiv(a, b));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`10
7 3
4 9
9 4
9 3
10 2
3 5
8 2
9 1
10 8
2 10`);
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

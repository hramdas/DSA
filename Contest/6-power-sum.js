function runProgram(input) {
  let [x, n] = input.trim().split(" ").map(Number);
  res = 0;
  console.log(powerSum(x, x, 0, n));
}
function powerSum(num, x, k, n) {
  if (x == 0) res++;
  for (let i = 1; i < x; i++) {}
}

if (process.env.USERNAME === "hedga") {
  runProgram(`10 2`);
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

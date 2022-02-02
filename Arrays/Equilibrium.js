function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  console.log(Equilibrium(arr, n));
}

function Equilibrium(arr, n) {
  var sum = 0;
  var left_sum = 0;
  for (let i = 0; i < n; i++) sum += arr[i];

  for (let i = 0; i < n; i++) {
    sum = sum - arr[i];
    if (sum == left_sum) return i + 1;
    left_sum += arr[i];
  }
  return -1;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5
3 3 5 5 1`);
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

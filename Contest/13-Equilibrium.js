function equilibrium(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let curSum = arr[0];
  for (let i = 1; i < n; i++) {
    if (sum - curSum - arr[i] == curSum) {
      return i + 1;
    } else curSum += arr[i];
  }
  return -1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  console.log(equilibrium(arr, n));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`6
3 2 3 5 5 3`);
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

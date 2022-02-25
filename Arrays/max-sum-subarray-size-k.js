function maxSubArraySum(arr, n, k) {
  var arr;

  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += arr[j];
  }
  let curSum = sum;
  for (let i = k; i < n; i++) {
    curSum += arr[i] - arr[i - k];
    sum = Math.max(sum, curSum);
  }
  return sum;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  console.log(maxSubArraySum(arr, n, k));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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

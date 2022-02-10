function runProgram(input) {
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var sum1 = 0;
  var sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i];
  }
  for (let i = n; i < 2 * n; i++) {
    sum2 += arr[i];
  }
  let diff = Math.abs(sum1 - sum2);
  //console.log(sum1, sum2, diff);
  if (diff < k) console.log("Valid");
  else console.log("Invalid");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3 4
1 8 5 9 6 1`);
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

function runProgram(input) {
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var arr = arr.sort((a, b) => a - b);
  var count = 0;
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum <= k) count++;
  }
  console.log(count);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`4 20
3 10 4 4 `);
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

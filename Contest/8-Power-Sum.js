function runProgram(input) {
  var [n, m] = input.trim().split(" ").map(Number);
  count = 0;
  ways(n, m, 1);
  console.log(count);
}
function ways(n, m, num) {
  let r = n - Math.pow(num, n);
  if (r == 0) {
    count++;
    return 1;
  }
  if (r < 0) return 0;
  count++;
  ways(r, m, num + 1);
  ways(n, m, num + 1);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`100 3`);
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

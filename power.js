function power(a, b) {
  let res = 1;
  console.log(a, b);
  for (let i = 0; i < b; i++) {
    res = res * a;
  }
  return res;
}

function runProgram(input) {
  var [a, b] = input.trim().split(" ").map(Number);
  console.log(power(a, b));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`10 20`);
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

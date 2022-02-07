function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var gas = input[1].trim().split(" ").map(Number);
  var cost = input[2].trim().split(" ").map(Number);

  let curgas = 0;
  let start = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    curgas = curgas + (gas[i] - cost[i]);
    total = gas[i] - cost[i];
    if (curgas < 0) {
      start = i + 1;
      curgas = 0;
    }
  }
  if (total < 0) {
    start = -1;
  }
  console.log(start);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5
1 2 3 4 5
3 4 5 1 2`);
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

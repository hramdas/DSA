function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var gas = input[1].trim().split(" ").map(Number);
  var cost = input[2].trim().split(" ").map(Number);

  console.log(gasStation(gas, cost, n));
}
function gasStation(gas, cost, n) {
  var index = 0;
  var curr = 0;
  var total = 0;
  for (let i = 0; i < n; i++) {
    curr += gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (curr < 0) {
      index = i + 1;
      curr = 0;
    }
  }
  if (total >= 0) return index;
  else return -1;
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

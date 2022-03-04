function findOne(arr, n) {
  let obj = {};
  arr.forEach((e) => {
    obj[e] = obj[e] ? (obj[e] += 1) : 1;
  });
  for (let key in obj) {
    if (obj[key] == 1) return key;
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(findOne(arr, n));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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

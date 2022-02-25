function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
    console.log(reMiss(arr, n).join(" "));
  }
}
function reMiss(arr, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = obj[arr[i]] ? (obj[arr[i]] += 1) : 1;
  }
  var rep = 0;
  var mis = 0;
  for (let i = 1; i <= n; i++) {
    if (obj[i] == 2) {
      rep = i;
    }
    if (!obj[i]) mis = i;
  }
  return [mis, rep];
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3
5
1 3 2 3 4
2
1 1
3
1 2 2`);
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

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  for (let i = 1; i <= n; i++) {
    let p = +input[i].trim();
    console.log(minCoins(p));
  }
}
function minCoins(p) {
  var sum = 0;
  var c = 0;
  let i = 1;
  while (i < p) {
    sum += fact(i);
    if (sum < p) {
      i++;
    }
    if (sum == p) return i;
  }
}
function fact(a) {
  let res = 1;
  for (let i = 1; i <= a; i++) {
    res = res * i;
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
9
10`);
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

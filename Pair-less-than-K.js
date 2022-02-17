function pairCount(arr, n, k) {
  let res = -1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const num = arr[i] + arr[j];
      if (num < k && num > res) res = num;
    }
  }

  return res;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    let k = +input[line++].trim();
    console.log(pairCount(arr, n, k));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    let result = rotate(arr, n);

    for (let i = 0; i < n; i++) {
      console.log(result[i].join(" "));
    }
  }
}
function rotate(arr, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let col = [];
    for (let j = n - 1; j >= 0; j--) {
      col.push(arr[j][i]);
    }
    res.push(col);
  }
  return res;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
3
1 2 3
4 5 6
7 8 9`);
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

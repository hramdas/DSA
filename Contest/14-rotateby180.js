function rotateBy180(arr, n) {
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[arr[n - 1 - i][n - j - i]];
      arr[arr[n - 1 - i][n - j - i]] = temp;
    }
  }
  return arr;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = [];
    for (let j = 0; j < n; j++) {
      let row = input[line++].trim().split(" ").map(Number);
      arr.push(row);
    }
    console.log(rotateBy180(arr, n));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`);
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

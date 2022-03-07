function spiralTraverse(arr, m, n) {
  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = m - 1;
  let count = 0;
  let res = [];
  while (count < n * m) {
    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][left]);
      count++;
    }
    left++;
    for (let i = left; i <= right; i++) {
      res.push(arr[bottom][i]);
      count++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(arr[i][right]);
      count++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      res.push(arr[top][i]);
      count++;
    }
    top++;
  }
  return res.join(" ");
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [m, n] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let j = 0; j < m; j++) {
      let row = input[line++].trim().split(" ").map(Number);
      arr.push(row);
    }
    console.log(spiralTraverse(arr, m, n));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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

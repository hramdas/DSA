function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(flower(arr, n, m));
  }
}
function flower(arr, n, m) {
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
    } else if (i == 0 && arr[i + 1] == 0) {
      arr[i] = 1;
      m--;
    } else if (i == n - 1 && arr[i - 1] == 0) {
      arr[i] = 1;
      m--;
    } else if (arr[i - 1] == 0 && arr[i + 1] == 0) {
      arr[i] = 1;
      m--;
    }
    if (m == 0) return "Yes";
  }
  if (m > 0) return "No";
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
10 3
1 1 1 1 0 1 0 0 1 1`);
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

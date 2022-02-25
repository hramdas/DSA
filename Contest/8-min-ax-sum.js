function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);

    let arr = input[line++].trim().split(" ").map(Number);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i] < arr[j]) {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log(diff(arr, n, m));
  }
}
function diff(arr, n, m) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < m; i++) {
    min += arr[i];
  }
  for (let i = n - m; i < n; i++) {
    max += arr[i];
  }
  return max - min;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
5 1
1 2 3 4 5`);
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

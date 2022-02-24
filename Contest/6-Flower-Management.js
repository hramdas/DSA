function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);

    console.log(possible(arr, n, k));
  }
}
function possible(arr, n, k) {
  if (k == 0) return "Yes";
  for (let i = 0; i < n; i++) {
    if (
      arr[i] == 0 &&
      (i == 0 || arr[i - 1] == 0) &&
      (i == n - 1 || arr[i + 1] == 0)
    ) {
      k--;
      i++;
      if (k == 0) return "Yes";
    }
  }
  return "No";
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
5 1
1 0 0 0 1`);
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

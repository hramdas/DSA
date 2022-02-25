function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);

    console.log(sqSort(arr, n));
  }
}
function sqSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] * arr[i] < arr[j] * arr[j]) {
        // temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else if (arr[i] * arr[i] == arr[j] * arr[j]) {
        if (i > j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        } else [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr.join(" ");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
10
20 -1 -11 12 -11 11 -13 -4 20 -4
`);
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

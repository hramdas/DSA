function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;

  for (let i = 0; i < cases; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    var sum1 = 0;
    for (let i = 0; i < n - m; i++) {
      sum1 += arr[i];
    }
    var sum2 = 0;
    for (let i = m; i < n; i++) {
      sum2 += arr[i];
    }
    console.log(Math.abs(sum1 - sum2));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
5 1
2 1 3 5 4`);
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

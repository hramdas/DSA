function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(maxSubProduct(arr, n));
  }
}

function maxSubProduct(arr, n) {
  let max = 1;
  let pro = 0;

  let l = 1;
  let h = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      max = max * arr[i];
    } else if (arr[i] < 0 ** arr[i + 1] < 0) {
      max = max * arr[i] * arr[i + 1];
      i++;
    } else if (arr[i] == 0) {
    }
  }
  return max;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
3
-3 0 -2
5
6 -3 -10 0 2`);
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

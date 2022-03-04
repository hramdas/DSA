function parts(arr, n) {
  let len = n / 4;
  let c1 = sum(arr, 0, len);
  let c2 = sum(arr, len, 2 * len);
  let c3 = sum(arr, 2 * len, 3 * len);
  let c4 = sum(arr, 3 * len, n);

  let res = c1 * 2 + c2 + c3 * 2 + c4;
  return res;
}
function sum(arr, l, h) {
  let sum = 0;
  for (let i = l; i < h; i++) {
    sum += arr[i];
  }
  return sum;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  console.log(parts(arr, n));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`8
1 2 3 4 5 6 7 8`);
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

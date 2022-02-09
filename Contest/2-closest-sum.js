function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var [n, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    var arr = arr.sort((a, b) => a - b);
    console.log(closetSum(arr, n, k));
  }
}

function closetSum(arr, n, k) {
  let sum = 0;
  let l;
  let r;
  for (let i = 0; i < n - 2; i++) {
    l = i + 1;
    r = n - 1;
    while (l < r) {
      var val = arr[i] + arr[l] + arr[r];
      if (Math.abs(val - k) < Math.abs(sum - k)) {
        sum = val;
        l++;
      } else if (Math.abs(val - k) > Math.abs(sum - k)) {
        l++;
      } else r--;
    }
  }
  return sum;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
4 1
-1 2 1 -4
3 1
0 0 0`);
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

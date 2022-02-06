function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [n, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(closet(arr, n, k));
  }
}
function closet(arr, n, k) {
  if (arr.length < 3) return 0;
  arr = arr.sort((a, b) => a - b);
  var res = Math.abs(arr[0] + arr[1] + arr[2]);
  for (let i = 0; i < n; i++) {
    var l = i + 1;
    var r = n - 1;
    while (l < r) {
      if (Math.abs(arr[i] + arr[r] + arr[l] - k) <= Math.abs(res - k)) {
        res = arr[i] + arr[r] + arr[l];
        l++;
      } else r--;
    }
  }
  return res;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`10
6 5
-4 1 -5 3 2 -5
9 2
-5 -2 6 -6 -1 -4 2 1 -4
5 16
-6 9 -1 -11 -11
10 20
-8 13 10 -3 13 -12 13 13 -7 -9
9 8
-4 -4 -2 -4 4 1 -3 -3 3
9 12
5 6 5 -1 2 2 4 3 5
20 7
-2 -1 8 13 -13 -13 4 3 9 -4 2 -10 9 -7 0 -3 14 9 -7 11
3 3
-4 -1 5
18 27
-4 -8 2 -8 6 -4 14 8 14 -6 14 14 -9 2 -7 -11 -3 -7
16 2
1 0 1 0 -1 0 -1 0 0 -1 0 -1 -1 0 1 -1`);
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

function middle(arr, n) {
  if (n < 2) return -1;
  let pre = -1;
  let post = -1;
  let i = 1;
  while (i < n - 1) {
    pre = checksmall(arr, 0, i);
    post = checkgreater(arr, i + 1, n, i);
    if ((pre == 1) & (post == 1)) return arr[i];
    i++;
  }
  return -1;
}

function checkgreater(arr, l, h, i) {
  for (let j = l; j < h; j++) {
    if (arr[i] > arr[j]) return -1;
  }
  return 1;
}
function checksmall(arr, l, h) {
  for (let j = l; j <= h; j++) {
    if (arr[h] < arr[j]) return -1;
  }
  return 1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);

  console.log(middle(arr, n));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5
4 3 6 7 8`);
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

function getMax(arr, n) {
  let l = 0;
  let h = n - 1;

  while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (arr[mid] > arr[mid + 1]) return mid;
    else if (arr[mid - 1] > arr[mid]) return mid;
    else if (arr[mid] > arr[mid - 1] && arr[mid] > arr[0]) l = mid + 1;
    else h = mid - 1;
  }
}

function check(arr, n, mid) {
  if (arr[0] < arr[n - 1]) return "NO";
  for (let i = 1; i <= mid; i++) {
    if (arr[i] < arr[i - 1]) {
      return "NO";
    }
  }
  for (let i = mid + 2; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return "NO";
    }
  }
  return "YES";
}
function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);

  let mid = getMax(arr, n);

  console.log(check(arr, n, mid));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`6
4 6 5 1 2 3`);
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

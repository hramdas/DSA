function checkSortedRotated(arr, n) {
  if (arr[0] < arr[n - 1]) return "NO";
  let mid = getMid(arr, n);
  if (isSorted(arr, n, mid)) return "YES";
  else return "NO";
}
function getMid(arr, n) {
  let l = 0;
  let h = n - 1;
  while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[0]) return mid;
    else if (arr[mid] < arr[mid - 1] && arr[mid - 1] > arr[0]) return mid - 1;
    else if (arr[mid] > arr[0]) l = mid + 1;
    else h = mid - 1;
  }
}
function isSorted(arr, n, mid) {
  for (let i = 0; i < mid; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  for (let i = mid + 1; i < n; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  console.log(checkSortedRotated(arr, n));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`15
10 11 12 13 14 15 0 2 1 2 4 5 7 8`);
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

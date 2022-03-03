function runProgram(input) {
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  let low = lower(arr, 0, n - 1, k);
  let high = upper(arr, low, n - 1, k);
  console.log(high - low + 1);
}
function lower(arr, l, h, k) {
  while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (arr[mid] == k && arr[mid - 1] !== k) return mid;
    else if (arr[mid] == k && arr[mid - 1] == k) h = mid - 1;
    else if (arr[mid] > k) h = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

function upper(arr, l, h, k) {
  while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (arr[mid] == k && arr[mid + 1] !== k) return mid;
    else if (arr[mid] == k && arr[mid + 1] == k) l = mid + 1;
    else if (arr[mid] > k) h = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`6 3
2 3 3 3 6 9`);
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

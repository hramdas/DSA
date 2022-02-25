function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  console.log(search(arr, n, k));
}
function search(arr, n, k) {
  let l = 0;
  let h = n - 1;
  //   while (l <= h) {
  //     let mid = Math.floor(l + (h - l) / 2);
  //     console.log(l, h, mid, arr[mid]);

  //     if (arr[mid] == k) return mid;
  //     else if (arr[mid] > k && k > arr[n - 1] && k >= arr[0]) {
  //       console.log(mid, 1);
  //       h = mid - 1;
  //     } else if (arr[mid] < k && k > arr[n - 1]) {
  //       l = mid + 1;
  //     } else if (arr[mid] > k && k < arr[0]) {
  //       h = mid + 1;
  //     } else if (arr[mid] < k && k < arr[0] && k >= arr[0]) {
  //       h = mid - 1;
  //     } else l = mid - 1;
  //   }

  for (let i = 0; i < n; i++) {
    if (arr[i] == k) return i;
  }
  return -1;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5 1
3 4 5 1 2`);
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

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var k = +input[2].trim();
  var arr = input[1].trim().split(" ").map(Number);
  console.log(occurance(arr, k, n));
}
function occurance(arr, k, n) {
  var i = lower(arr, k, 0, n);
  console.log(i);
  if (i !== -1) {
    var j = upper(arr, k, i, n);
  }
  return [i, j];
  // return (j-i+1)
  //else return (-1, -1, 0)
}

function lower(arr, k, l, h) {
  let res = -1;
  while (h >= l) {
    let mid = Math.floor(l + (h - l) / 2);

    if (arr[mid] == k) {
      res = mid;
      h = mid - 1;
    } else if (k > arr[mid]) {
      l = mid + 1;
    } else h = mid - 1;
  }
  return res;
}

function upper(arr, k, l, h) {
  while (h >= l) {
    let mid = Math.floor(l + (h - 1) / 2);
    if (arr[mid] == k) {
      res = mid;
      l = mid + 1;
    } else if (k > arr[mid]) {
      l = mid + 1;
    } else h = mid - 1;
  }
  return res;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`6
    1 1 1 2 2 2	
    1`);
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

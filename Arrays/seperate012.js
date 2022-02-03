function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(seperation(arr, n));
  }
}
function seperation(arr, n) {
  var mid = 0;
  var r = n - 1;
  var l = 0;
  while (mid <= r) {
    switch (arr[mid]) {
      case 0: {
        temp = arr[mid];
        arr[mid] = arr[l];
        arr[l] = temp;
        l++;
        mid++;
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        temp = arr[mid];
        arr[mid] = arr[r];
        arr[r] = temp;
        r--;
        break;
      }
    }
  }
  return arr;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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

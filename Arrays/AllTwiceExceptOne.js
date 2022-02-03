function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(element(arr, n));
  }
}
function element(arr, n) {
  res = arr[0];
  for (let i = 1; i < n; i++) {
    res = res ^ arr[i];
  }

  return res;
}

// function element(arr, n) {
//   var obj = {};
//   for (let i = 0; i < n; i++) {
//     obj[arr[i]] = obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
//   }

//   for (key in obj) {
//     if (obj[key] == 1) return key;
//   }
// }

if (process.env.USERNAME === "hedga") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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

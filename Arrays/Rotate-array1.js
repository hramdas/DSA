function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [n, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    k = k % n;

    console.log(rotate(arr, n, k));
  }
}
function rotate(arr, n, k) {
  let newarr = [];
  for (let i = n - k; i < n; i++) {
    newarr.push(arr[i]);
  }
  for (let i = 0; i < n - k; i++) {
    newarr.push(arr[i]);
  }
  return newarr.join(" ");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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

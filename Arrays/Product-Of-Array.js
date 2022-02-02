function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(product(arr, n));
  }
}
function product(arr, n) {
  let pro = [];
  let temp = 1;
  for (let i = 0; i < n; i++) {
    pro[i] = temp;
    temp = temp * arr[i];
  }
  temp = 1;
  for (let i = n - 1; i >= 0; i--) {
    pro[i] = pro[i] * temp;
    temp = temp * arr[i];
  }
  return pro.join(" ");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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

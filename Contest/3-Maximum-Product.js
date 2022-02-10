function runProgram(input) {
  input = input.trim().split("\n");
  const cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(maxProduct(arr, n));
  }
}
function maxProduct(arr, n) {
  arr = arr.sort((a, b) => a - b);
  //console.log(arr);
  return arr[n - 1] * arr[n - 2];
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3
6 
1 0 7 2 4 0
5
1 2 3 4 5
2
0 0`);
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

function runProgram(input) {
  input = input.trim().split("n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var k = +input[2].trim();
  console.log(occurence(arr, n, k));
}

function occurence(arr, n, k) {}

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

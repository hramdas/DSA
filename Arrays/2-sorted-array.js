function runProgram(input) {
  input = input.trim().split("\n");

  var len = Number(input[0].trim());
  var arr1 = input[1].trim().split(" ").map(Number);
  var arr2 = input[2].trim().split(" ").map(Number);
}

//input = 5
//2 4 5 6 8
//4 7 9 3 5

// output = 6 11 14 9 13

if (process.env.USERNAME === "hedga") {
  runProgram(`5
  2 4 5 6 8
  4 7 9 3 5
`);
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

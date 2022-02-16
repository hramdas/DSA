function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  for (let i = 1; i <= n; i++) {
    let num = +input[i].trim();

    let res = [];
    binary(num, res);
    console.log(res.join(""));
  }
}
function binary(num, res) {
  if (num == 0 || num == 1) {
    res.push(num);
    return;
  }

  binary(Math.floor(num / 2), res);
  res.push(num % 2);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
15
128`);
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

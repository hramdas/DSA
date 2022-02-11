function runProgram(input) {
  var n = +input.trim();
  n = n - 80;
  let a = 150;
  let b = 500;

  if (n > a + b) {
    n = n - a - b;
    console.log(n / 10 + 150);
  } else if (n > 50) {
    n = n - a;
    console.log(n / 5 + 50);
  } else {
    console.log(n / 3);
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`930`);
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

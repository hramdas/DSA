function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();

  for (let i = 1; i <= n; i++) {
    var num = +input[i].trim();
    var res = 0;

    while (num !== 0) {
      num = num & (num << 1);
      res++;
      //console.log("num", num);
    }
    console.log(res);
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
11
13`);
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

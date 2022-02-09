function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;

  for (let i = 0; i < cases; i++) {
    var c = input[line++].trim().split(".").map(Number);
    var n = input[line++].trim().split(".").map(Number);
    //console.log("C N", c, n);
    console.log(updateCheck(c, n));
  }
}

function updateCheck(c, n) {
  var i = 0;
  while (i < c.length && i < n.length) {
    //console.log(i, c[i] + n[i], c[i] > n[i]);
    if (c[i] > n[i]) {
      return "False";
    } else {
      i++;
    }
  }

  return "True";
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
12.0.1
12.10.0
1.1.10
1.1.12`);
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

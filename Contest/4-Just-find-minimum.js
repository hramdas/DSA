function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  let st = [];
  for (let i = 1; i <= n; i++) {
    var line = input[i].trim().split(" ");

    if (line[0] == "PUSH") {
      st.push(+line[1]);
    } else if (line[0] == "MIN") {
      if (st.length == 0) {
        console.log("EMPTY");
      } else console.log(Math.min(...st));
    } else {
      if (st.length == 0) {
        console.log("EMPTY");
      } else st.pop();
    }
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`);
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

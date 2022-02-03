function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  for (let i = 1; i < n; i++) {
    var el = input[i].trim().split(" ");
    var st = [];

    if (el[0] == "PUSH") {
      stPush(st, +el[1]);
    } else if (el[0] == "POP") {
      st.pop();
    } else {
      console.log(minEl(st));
    }
  }
}
function stPush(st, num) {
  st.push(num);
}

function minEl(st) {
  return Math.min(...st);
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

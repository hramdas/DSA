function possibleStr(n) {
  let obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let res = [];
  let str = "";
  for (let i = 0; i < n.length; i++) {
    str += obj[n[i]];
  }
  return str;
}

function runProgram(input) {
  var n = input.trim().split("").map(Number);
  console.log(possibleStr(n));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`22`);
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

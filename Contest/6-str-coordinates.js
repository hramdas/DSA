function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var str = input[1].trim();
  console.log(strCoord(str, n).join(" "));
}
function strCoord(str, n) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] == "u") {
      x++;
    } else if (str[i] == "d") {
      x--;
    } else if (str[i] == "l") {
      y--;
    } else if (str[i] == "r") {
      y++;
    }
  }
  return [x, y];
}

if (process.env.USERNAME === "hedga") {
  runProgram(`4
lldd`);
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

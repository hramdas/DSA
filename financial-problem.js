// https://jscodesample.blogspot.com/2022/01/solve-financial-problem.html

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);

    var col = [];
    col.push([arr[0], 1]);
    var c = 1;
    for (let k = 1; k < n; k++) {
      if (c > 1 && col[k - 1][0] < arr[k]) {
        c++;
        col.push([arr[k], c]);
      } else if (col[k - 1][0] < arr[k]) {
        col.push([arr[k], c + 1]);
        c++;
      } else col.push([arr[k], 1]);
    }

    var ans = col.map((e) => e[1]);
    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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

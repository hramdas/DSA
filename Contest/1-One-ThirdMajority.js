function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 2 : (obj[arr[i]] = 1);
  }

  var res = [];
  for (key in obj) {
    if (obj[key] > n / 3) {
      res.push(key);
    }
  }
  console.log(res.sort().join(" "));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`6
3 2 3 2 4 1`);
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

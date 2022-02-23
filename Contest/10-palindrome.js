function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var str = input[line++].trim();

    console.log(palindromeCheck(str, n));
  }
}
function palindromeCheck(str, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[str[i]] = obj[str[i]] ? (obj[str[i]] += 1) : 1;
  }
  let count = 0;
  //console.log(obj);
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      count++;
    }
    if (count > 1) return "Not Possible!";
  }

  if (count < 2) return "Possible!";
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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

function runProgram(input) {
  input = input.trim().split("n");
  var str = input[0].trim();

  console.log(substr(str, str.length));
}

function substr(str, n) {
  let len = 0;
  for (let i = 0; i < n; i++) {
    var sub = [];
    for (let j = i; j < n; j++) {
      sub.push(str[j]);
      if (len < palLength(sub)) {
        len = palLength(sub);
      }
    }
  }
  return len;
}

function palLength(sub) {
  for (let i = 0; i < Math.floor(sub.length / 2); i++) {
    if (sub[i] !== sub[sub.length - 1 - i]) {
      return 0;
    }
  }
  return sub.length;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`thisracecaraaacecaaa`);
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

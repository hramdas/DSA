function runProgram(input) {
  input = input.trim().split("\n");
  var str1 = input[0].trim().split("");
  var str2 = input[1].trim().split("");

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        str1[i] = 1;
      }
    }
  }

  var res = {};
  str1.forEach((e) => {
    if (e !== 1) res[e] = res[e] ? (res[e] += 1) : 1;
  });

  var out = [];
  for (key in res) {
    out.push(key);
  }
  console.log(out.join(""));
}

if (process.env.USERNAME === "hedga") {
  runProgram(`AAXZR
ABCD`);
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

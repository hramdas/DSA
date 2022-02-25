function runProgram(input) {
  input = input.trim().split("\n");
  var s1 = input[0].trim();
  var s2 = input[1].trim();
  let obj1 = {};

  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = obj1[s1[i]] ? (obj1[s1[i]] += 1) : 1;
  }
  let obj2 = {};
  for (let i = 0; i < s2.length; i++) {
    obj2[s2[i]] = obj2[s2[i]] ? (obj2[s2[i]] += 1) : 1;
  }

  ///console.log(obj1, obj2);
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`amit
mt`);
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

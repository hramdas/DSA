function runProgram(input) {
  input = input.trim().split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var sub = [[]];
  //subsequesce(arr, 0, k, sub);

  for (let i = 0; i < n; i++) {
    var l = sub.length - 1;
    for (let j = 0; j <= l; j++) {
      sub.push([...sub[j], arr[i]]);
    }
  }
  sub = sub.sort();
  //   console.log;

  for (let i = 0; i < sub.length; i++) {
    var sum = 0;
    sub[i].forEach((e) => (sum += e));
    if (sum == k) {
      console.log(sub[i].join(" "));
    }
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3 8
2 3 5`);
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

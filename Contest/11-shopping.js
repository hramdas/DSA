function possibleItems(n, m) {
  let arr = [];
  let sub = [[]];
  for (let i = 1; i <= n; i++) {
    let l = sub.length - 1;
    for (let j = 0; j <= l; j++) {
      sub.push([...sub[j], i]);
    }
  }
  sub = sub.sort();
  for (let i = 0; i < sub.length; i++) {
    if (sub[i].length == m) console.log(sub[i].join(" "));
  }
  //   return
}

function runProgram(input) {
  let [n, k] = input.trim().split(" ").map(Number);

  possibleItems(n, k);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`4 2`);
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

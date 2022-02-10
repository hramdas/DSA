function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var k = +input[2].trim();
  console.log(sumExist(arr, n, k));
}

function sumExist(arr, n, k) {
  const subsets = [[]];

  for (const el of arr) {
    const last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      subsets.push([...subsets[i], el]);
    }
  }

  for (let i = 0; i < subsets.length; i++) {
    if (resSum(subsets[i]) == k) return "yes";
  }
  return "no";
}

function resSum(res) {
  let sum = 0;
  res.forEach((e) => {
    sum += e;
  });
  return sum;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3
1 2 3
4`);
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

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let m = n;
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(input[line++].trim().split(""));
    }

    console.log(resCount(arr, n, m));
  }
}

function resCount(arr, n, m) {
  count = 0;
  let r = 0;
  let c = 0;
  while (r >= 0 && r < n && c >= 0 && c < m) {
    if (arr[r][c] == "C") {
      return 0;
    }
    if (arr[r][c] == "R") {
      arr[r][c] = "C";
      c++;
    } else if (arr[r][c] == "L") {
      arr[r][c] = "C";
      c--;
    } else if (arr[r][c] == "U") {
      arr[r][c] = "C";
      r--;
    } else if (arr[r][c] == "D") {
      arr[r][c] = "C";
      r++;
    }
    count++;
  }
  return count;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3
7
DDDRURD
UUDULUU
DDDDLUR
UDRURUD
UDDURDD
LRDDLDL
UULDLRL
6
RDDLRU
UULLLL
LULDLR
LLURRR
DLDRRU
ULLLDL
1
L`);
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

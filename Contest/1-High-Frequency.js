function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(freq(arr, n));
  }
}
function freq(arr, n) {
  var obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
  }

  var freq = 0;
  var res = 1;

  for (key in obj) {
    if (freq == 0) {
      freq = key;
    } else if (obj[key] == obj[freq] && key < freq) {
      freq = key;
    } else if (obj[key] > obj[freq]) {
      freq = key;
    }
    //console.log(obj[freq], freq);
  }
  return freq;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
10
5 1 4 4 2 2 3 2 4 3
1
2`);
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

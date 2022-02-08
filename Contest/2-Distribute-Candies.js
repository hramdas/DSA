function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(candies(arr, n));
  }
}

function candies(arr, n) {
  var res = 0;
  var pre = 0;
  if (arr[0] < arr[1]) {
    pre = 1;
    res += pre;
  } else if (arr[0] > arr[1]) {
    pre = 2;
    res += pre;
  }
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] < arr[i + 1] && arr[i - 1] > arr[i]) {
      pre = 1;
      res += pre;
    } else if (arr[i] < arr[i + 1] && arr[i - 1] < arr[i]) {
      pre = pre + 1;
      res += pre;
    } else if (arr[i] > arr[i + 1] && arr[i - 1] < arr[i]) {
      pre = pre + 1;
      res += pre;
    } else if (arr[i] > arr[i + 1] && arr[i - 1] > arr[i]) {
      pre = pre + 1;
      res += pre;
    } else if (arr[i] == arr[i + 1]) {
      pre = pre + 1;
      res += pre;
    }
  }
  if (arr[n - 1] < arr[n - 2]) {
    pre = 1;
    res += pre;
  } else if (arr[n - 1] > arr[n - 2]) {
    pre = pre + 1;
    res += pre;
  }
  return res;
}
if (process.env.USERNAME === "hedga") {
  runProgram(`2
3 
1 0 2
3
1 2 2`);
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

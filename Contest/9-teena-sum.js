function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);

  console.log(sumVal(arr, n));
}

function sumVal(arr, n) {
  let arr1 = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        arr1[i] = j + 1;
        break;
      }
    }
  }
  let arr2 = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        arr2[i] = j + 1;
        break;
      }
    }
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    var a = +arr1[i];
    var b = +arr2[i];
    res.push(a + b);
  }

  return res.join(" ");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5
5 4 1 3 2`);
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

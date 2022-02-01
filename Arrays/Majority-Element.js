//Moore’s Voting Algorithm
function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(majority(arr, n));
  }
}
function majority(arr, n) {
  var index = 0;
  var count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[index] == arr[i]) {
      count++;
    } else count--;
    if (count == 0) {
      index = i;
      count = 1;
    }
  }

  var fre = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[index]) fre++;
  }
  if (fre > n / 2) return arr[index];
  else return -1;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`5
4
3 9 3 7
1
9
2
7 7
7
8 4 2 5 3 1 7
4
8 1 10 3`);
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

// function runProgram(input) {
//   input = input.trim().split("\n");
//   var cases = +input[0].trim();
//   var line = 1;
//   for (let i = 0; i < cases; i++) {
//     var n = +input[line++].trim();
//     var arr = input[line++].trim().split(" ").map(Number);
//     console.log(majority(arr, n));
//   }
// }
// function majority(arr, n) {
//   let obj = {};
//   for (let i = 0; i < n; i++) {
//     obj[arr[i]] = obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
//   }

//   var cur;
//   for (key in obj) {
//     if (obj[key] > n / 2) return key;
//   }
//   return -1;
// }

// if (process.env.USERNAME === "hedga") {
//   runProgram(`2
// 6
// 1 1 1 1 2 3
// 5
// 1 1 2 2 3`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

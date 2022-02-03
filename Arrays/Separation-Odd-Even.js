function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    var q = +input[line++].trim();
    console.log(seperation(arr, n, q));
  }
}

function seperation(arr, n, q) {
  let even = [];
  let odd = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }
  if (q == 1) return even.join(" ") + " " + odd.join(" ");
  return odd.join(" ") + " " + even.join(" ");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
6
1 3 5 2 7 4
1
6
1 3 5 2 7 4
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

// function runProgram(input) {
//   input = input.trim().split("\n");
//   var cases = +input[0].trim();
//   var line = 1;
//   for (let i = 0; i < cases; i++) {
//     var n = +input[line++].trim();
//     var arr = input[line++].trim().split(" ").map(Number);
//     arr.sort((a, b) => a - b);
//     var q = +input[line++].trim();
//     console.log(seperation(arr, n, q));
//   }
// }

// function seperation(arr, n, q) {
//   let l = 0;
//   r = n - 1;

//   while (l < r) {
//     while (arr[l] % 2 == 0 && l < r) {
//       l++;
//     }
//     while (arr[r] % 2 !== 0 && l < r) {
//       r--;
//     }
//     if (l < r) {
//       var temp = arr[l];
//       arr[l] = arr[r];
//       arr[r] = temp;
//     }
//   }
//   return arr;
// }

// if (process.env.USERNAME === "hedga") {
//   runProgram(`2
// 6
// 1 3 5 2 7 4
// 1
// 6
// 1 3 5 2 7 4
// 2`);
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

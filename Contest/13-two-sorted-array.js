function runProgram(input) {
  input = input.trim().split("\n");

  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr1 = input[line++].trim().split(" ").map(Number);
    var arr2 = input[line++].trim().split(" ").map(Number);
    console.log(TwoArray(arr1, arr2, n));
  }
}
function TwoArray(arr1, arr2, n) {
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < n && j < n) {
    if (arr1[i] == arr2[j]) {
      count++;
      i++;
      j--;
    } else if (arr1[i] > arr2[j]) {
      j--;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return count;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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

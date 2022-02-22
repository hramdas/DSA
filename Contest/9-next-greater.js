function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);

    console.log(nextGreate(arr, n));
  }
}
function nextGreate(arr, n) {
  let res = [];
  let st = [];

  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && st[st.length - 1] <= arr[i]) {
      st.pop();
    }

    if (st.length == 0) {
      res.push(-1);
      st.push(arr[i]);
    } else {
      res.push(st[st.length - 1]);
      st.push(arr[i]);
    }
  }
  return res.reverse().join(" ");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`1
4
1 3 2 4`);
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

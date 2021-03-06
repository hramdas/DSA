// oj.masaischool.com/contest/2740/problem/5-4

https: function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    var span = [];
    findSpan(arr, n, span);
    console.log(span.join(" "));
  }
}

function findSpan(arr, n, span) {
  var st = [];
  st.push(0);
  span[0] = 1;
  for (let j = 1; j < n; j++) {
    while (st.length !== 0 && arr[st[st.length - 1]] <= arr[j]) {
      st.pop();
    }
    span[j] = st.length == 0 ? j + 1 : j - st[st.length - 1];
    st.push(j);
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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

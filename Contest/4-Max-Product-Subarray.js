function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(maxSubProduct(arr, n));
  }
}

function maxSubProduct(arr, n) {
  let max = 0;
  let l = 0;
  let h = n - 1;
  let pro = 1;

  for (let i = 0; i < n; i++) {
    if (pro >= pro * arr[i]) {
      pro = arr[i];
    } else if (arr[i] > 0) pro = pro * arr[i];

    if (pro > max) {
      max = pro;
    }
  }
  return max;

  //let st = [];
  //   for (let i = 0; i < n; i++) {
  //     for (let j = i; j < n; j++) {
  //       let col = [];
  //       for (let k = i; k <= j; k++) {
  //         col.push(arr[k]);
  //       }
  //       st.push(col);
  //     }
  //   }

  //   let max = 0;
  //   for (let i = 0; i < st.length; i++) {
  //     let proCal = 1;
  //     st[i].forEach((e) => (proCal = proCal * e));
  //     if (max < proCal) max = proCal;
  //   }
  //   return max;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
3
-3 0 -2
4
-4 -5 -1 2`);
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

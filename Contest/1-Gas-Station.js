function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var gas = input[1].trim().split(" ").map(Number);
  var cost = input[2].trim().split(" ").map(Number);
  //   let maincost = cost;

  //   var cost = cost.sort((a, b) => {
  //     return a - b;
  //   });
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(gas[i] - cost[i]));
  }
  // var res = 0
  // for(let i=0; i<n; i++){
  //   while(arr[i]+res >= arr[i]){

  //   }
  // }
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      console.log(i);
      return;
    }
  }
}

if (process.env.USERNAME === "hedga") {
  runProgram(`4
9 6 9 5
7 6 4 7 `);
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

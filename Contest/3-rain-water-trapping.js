function runProgram(input) {
  input = input.trim().split("\n");
  const cases = +input[0].trim();
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(water(arr, n));
  }
}
function water(arr, n) {
  var res = 0;
  var lmax = 0;
  var rmax = 0;
  var l = 0;
  var h = n - 1;

  while (l <= h) {
    if (arr[l] < arr[h]) {
      if (arr[l] > lmax) {
        lmax = arr[l];
      } else res += lmax - arr[l];
      l++;
    } else {
      if (arr[h] > rmax) {
        rmax = arr[h];
      } else res += rmax - arr[h];
      h--;
    }
  }
  return res;
  //   var sum = 0;
  //   for (let i = 0; i < n; i++) {
  //     var left = arr[i];
  //     for (let j = 0; j < i; j++) {
  //       left = Math.max(left, arr[j]);
  //     }
  //     var right = arr[i];
  //     for (let j = i + 1; j < n; j++) {
  //       right = Math.max(right, arr[j]);
  //     }
  //     sum += Math.min(left, right) - arr[i];
  //   }
  //   return sum;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);
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

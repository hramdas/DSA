function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  let l = 0;
  oppQuickSort(arr, l, n);
  // arr.shift();
  console.log(arr);
}
function oppQuickSort(arr, l, h) {
  if (l < h) {
    let p = partition(arr, l, h);

    oppQuickSort(arr, l, p - 1);
    oppQuickSort(arr, p + 1, h);
  }
}

function partition(arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j < h; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, h);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

if (process.env.USERNAME === "hedga") {
  runProgram(`7
2 3 1 4 5 6 7`);
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

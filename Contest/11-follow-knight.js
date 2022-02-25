function runProgram(input) {
  let [i, j, n] = input.trim().split(" ");
  board = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      row.push(0);
    }
    board.push(row);
  }
  knight(i - 1, j - 1, n);
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[i][j] == 1) count++;
    }
  }
  console.log(count);
}

function knight(i, j, n) {
  if (i < 0 || i > 9 || j < 0 || j > 9) return;
  if (n === 0) {
    board[i][j] = 1;
    return;
  }
  knight(i - 2, j - 1, n - 1);
  knight(i - 2, j + 1, n - 1);
  knight(i - 1, j - 2, n - 1);
  knight(i + 1, j - 2, n - 1);
  knight(i - 1, j + 2, n - 1);
  knight(i + 1, j + 2, n - 1);
  knight(i + 2, j - 1, n - 1);
  knight(i + 2, j + 1, n - 1);
}

if (process.env.USERNAME === "hedga") {
  runProgram(`3 8 5`);
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

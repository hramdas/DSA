function runProgram(input) {
    var arr = input.trim().split(' ').map(Number)
    var i = arr[0]
    var j = arr[1]
    var n = arr[2]

    board = []
    for(let a =0; a< 10; a++){
      col = []
      for(let b=0; b<10; b++){
        col.push(0)
      }
      board.push(col)
    }

    knight(i, j, n)

    var count = 0;
    for(let a =0; a<10; a++){
      for(let b=0; b<10; b++){
        if(board[a][b] == 1) {
          count++
        }
      }
    }
    console.log(count)
}

function knight( i, j, n){
  if(i<0 || i>9 || j<0 || j>9) return;

  if(n === 0){
    board[i][j] = 1;
    return;
  }

  knight(i-2, j-1, n-1)
  knight(i-2, j+1, n-1)
  knight(i-1, j-2, n-1)
  knight(i+1, j-2, n-1)
  knight(i-1, j+2, n-1)
  knight(i+1, j+2, n-1)
  knight(i+2, j+1, n-1)
  knight(i+2, j-1, n-1)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 3 1`);
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
  
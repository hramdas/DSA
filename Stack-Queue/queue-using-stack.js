//https://oj.masaischool.com/contest/2740/problem/5-1

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
     s1 = []
     s2 = []
    for(var i=1 ;i<=n; i++){
      var line = input[i].trim().split(' ').map(Number)
      if(line[0] === 0) s1.push(line[1])
      if(line[0] === 2)  deQueue(s1, s2)
      console.log('i', i, line[1], s1)
    }
}

function deQueue(s1, s2){
  
    while(s1.length !== 0 ){
      s2.push(s1.pop())
    }
    console.log(s2.pop())

    while(s2.length !== 0){
      s1.push(s2.pop)
    }
    return
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1`);
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
  
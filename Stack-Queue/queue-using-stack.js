//https://oj.masaischool.com/contest/2740/problem/5-1

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
     var s1 = []
     var s2 = []
    for(var i=1 ;i<=n; i++){
      var line = input[i].trim().split(' ').map(Number)

      if(line[0] === 0){
        s1.push(line[1])
      } else if(line[0] === 2){
        // deQueue(s1, s2)
        while(s1.length > 0 ){
          var poped = s1.pop()
          s2.push(poped)
        }
        s2.pop()
        while(s2.length > 0){
          var poped = s2.pop()
          s1.push(poped)
        }
      } else if(line[0] === 1){
        console.log(s1[0])
        // deQueue(s1, s2)
        // while(s1.length > 0 ){
        //   var poped = s1.pop()
        //   s2.push(poped)
        // }
        // s2.pop()
        // while(s2.length > 0){
        //   var poped = s2.pop()
        //   s1.push(poped)
        // }
      }
    }
    // console.log(s1, s2)
}
function deQueue(s1, s2){
  
    while(s1.length !== 0 ){
      s2.push(s1.pop())
    }    console.log(s2.pop())

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
  
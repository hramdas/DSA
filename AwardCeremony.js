function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()

    var line =1;
    for(let i=0; i <cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        // console.log(arr,n, line)
        
        // var obj = {}
        // for(var j =0; j<n; j++){
        //     obj[arr[j]] = obj[arr[j]] ? obj[arr[j]]+=1: obj[arr[j]]=1
        // }

        // console.log(obj)
        var col = []
        for(let a=0; a<n;a++){
            if(arr[a] == 0){
                col.push(0)
            }
        }
        for(let a=0; a<n;a++){
            if(arr[a] == 1){
                col.push(1)
            }
        }
        for(let a=0; a<n;a++){
            if(arr[a] == 2){
                col.push(2)
            }
        }
        console.log(col.join(' '))


    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
  
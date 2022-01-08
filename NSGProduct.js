function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)
        console.log(arr, n)
        var count = 1
        for(let j=0; j<n; j++){
            for(let k=j+1; k<n-1; k++){
                if(arr[j] < arr[k]){
                    var s = smaller(arr, k)
                    console.log('s',arr[j] ,s)
                    count = count * s
                    break;
                } else count = count * (-1)
            }

            //console.log('c' ,count)
        }
        console.log(count)
    }
}

function smaller(arr, k){
    for(let a=k+1 ; a<arr.length-1; a++){
        if(arr[a] < arr[k]){
            return arr[k]
        }
    } return -1
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    6
    5 1 6 2 5 1`);
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
  
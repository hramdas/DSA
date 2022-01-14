function runProgram(input) {
    input = input.trim().split('\n')
    var cases = +input[0].trim()
    var line = 1;
    for(let i=0; i<cases; i++){
        var n = +input[line++].trim();
        var arr = input[line++].trim().split(' ').map(Number)
        var span = []
        console.log(findSpan(arr, n, span ))
    }
}

function findSpan(arr, n, span ){
    var st = []
    st.push(0)
    span.push(1);

    for(let j=1; j<n; j++){
        while(arr[st[st.length-1]]<=arr[j] ){
            

        }
        span[j] = span[j].length ? j+1 : j=st[st.length-1]
        st.push(1)
    }
    return st

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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
  
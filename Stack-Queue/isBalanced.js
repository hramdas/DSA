function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    for(let i=1; i<=n; i++){
        let str = input[i].trim().split('')
        var res =  pairsCheck(str);
        if(res) console.log('balanced')
        else console.log('not balanced')
    }
}

function pairsCheck(s){
    var st = []
    for(let j=0; j<s.length; j++){
        if(s[j] == '(' || s[j] == '{' || s[j] == '['){
            st.push(s[j])

        } else {
            if(st.length === 0) return false
            else {
              if(s[j] == ')'){
                poped = st.pop()
                  if(poped == '{' || poped == '[') return false

              } else if(s[j] == '}'){
                poped = st.pop()   
                if(poped == '(' || poped == '[') return false
                
              } else if(s[j] == ']'){
                poped = st.pop()
              
                if(poped == '{' || poped == '(') return false
              }
            }
          }
    }
       return (st.length == 0) //return true
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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
  
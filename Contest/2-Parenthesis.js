function runProgram(input) {
  var arr = input.trim().split("");

  var n = arr.length;
  //console.log(arr);
  let st = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
      st.push(arr[i]);
    } else if (arr[i] == ")" || arr[i] == "}" || arr[i] == "]") {
      if (st.length == 0) {
        console.log("unbalanced");
        return;
      }
      let poped = st.pop();
      if (arr[i] == ")") {
        if (poped == "{" || poped == "[") {
          console.log("unbalanced");
          return;
        }
      } else if (arr[i] == "}") {
        if (poped == "(" || poped == "[") {
          console.log("unbalanced");
          return;
        }
      } else if (arr[i] == "]") {
        if (poped == "{" || poped == "(") {
          console.log("unbalanced");
          return;
        }
      }
    }
  }

  if (st.length == 0) console.log("balanced");
  else console.log("unbalanced");
}

if (process.env.USERNAME === "hedga") {
  runProgram(`[[[[]]]]`);
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

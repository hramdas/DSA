// Sort out!
// Description

// Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// You can only write your own sorting algorithm must not use builtin functionality of sort()


// Input
// Input Format

// The first line of input consists of the size of the array

// The next line consists of the array of size m

// Constraints

// 1<=m<=10000

// 0<=A[i]<=1000




// Output
// Output Format

// Output consists of a single line of integers


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim();
    var arr = input[1].trim().split(' ').map(Number)
    var col = [];
    for(let i=0; i<n; i++){
        col.push([arr[i], i])
    }
    var sorted = col.sort((a,b)=>a[0]-b[0])
    var ans = []
    sorted.forEach((e)=>ans.push(e[1]))

    console.log(ans.join(' '))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    4 5 3 7 1`);
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
  
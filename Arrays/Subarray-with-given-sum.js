//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1#

function runProgram(input) {
    input = input.trim().split('\n')
    var [n, s] = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)
    console.log(  subarraySum(arr, n, s))
}

function subarraySum(arr, n, s){
    var res = []
        var sum = arr[0]
        var l=0;
        for(let i=1; i<=n; i++){
            while(sum>s && l<i-1){
                sum = sum-arr[l]
                l++
            }
            if(sum==s) {
                res.push(l)
                res.push(i-1)
                return res
            }
            if(i<n)  sum+=arr[i]
           
        }
        res.push(-1)
        return res
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`74 664
    142 112 54 69 148 45 63 158 38 60 124 142 130 179 117 36 191 43 89 107 41 143 65 49 47 6 91 130 171 151 7 102 194 149 30 24 85 155 157 41 167 177 132 109 145 40 27 124 138 139 119 83 130 142 34 116 40 59 105 131 178 107 74 187 22 146 125 73 71 30 178 174 98 113`);
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
  
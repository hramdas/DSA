function runProgram(input) {
    input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var n = cases[0]
    var k = cases[1]
    var arr= input[1].trim().split(' ').map(Number)
    
    console.log(upperBound(arr, 0, n-1, k))
}
function upperBound(arr, l, h, k){

    while(l<=h){
        var mid = Math.floor(l+(h-l)/2);
       
        if(arr[mid] == k && arr[mid+1]!==k){
            return mid+1
        } else if(arr[mid] == k && arr[mid+1]==k){
            l=mid+1
        } else if(k<arr[mid] && arr[mid-1] < k){
            return mid
        } else  if(arr[mid] > k){
            h = mid-1
        } else l = mid+1
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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
  
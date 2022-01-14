function runProgram(input) {
    input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var n = cases[0]
    var k = cases[1]
    var arr= input[1].trim().split(' ').map(Number)
    
    var low = lower(arr, 0, n-1, k)
   //console.log('low',low, arr[low])
    var ans = -1
    if(k >= arr[0] && k<=arr[low-1]) {
        ans = search(arr, 0, low-1, k)
        //console.log('1', ans)
    }else if(k >=arr[low] && k<=arr[n-1]) {
        ans = search(arr, low, n-1, k)
       //console.log('2', ans)

    }
    console.log(ans) 
}
  function lower(arr, l, h, k){
      if(arr[l] < arr[h]) return 0
      while(l<=h){
          var mid = Math.floor(l+(h-l)/2)
          //console.log('searchmid' ,mid, l, h)
          if(arr[mid] > arr[mid+1]) {
              //console.log( 'midval' ,mid+1, arr[mid], arr[mid+1])
              return mid+1
            }
          else if(arr[mid] < arr[mid-1]) return mid
          else if(arr[l]<=arr[mid]) l = mid+1
          else if (arr[mid] <=arr[h]) h = mid-1
      }
  }
  function search(arr, l, h, k){
      while(l<=h){
          var mid = Math.floor(l+(h-l)/2)
          //console.log(mid, l, h)
          if(arr[mid] == k) return mid;
          else if(arr[mid] > k) h = mid-1;
          else l = mid+1
      }
      return -1
  }
if (process.env.USERNAME === "hedga") {
    runProgram(`20 12
    18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12`);
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
  
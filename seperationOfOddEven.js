N = 7; arr = [1, 3, 2, 4, 0, 4, 5]; Q = 2

function seperationOfOddEven(N, arr,Q) {
    //write code here
    if(Q == 1){
        let even = [];
        let odd = [];
        for(let i=0; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                even.push(arr[i])
            }else{
                odd.push(arr[i])
            }
        }
        let final1 = even.join(" ") +" "+ odd.join(" ")
   
        return final1.trim()
    }else{
        let even = [];
        let odd = [];
        for(let i=0; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                even.push(arr[i])
            }else{
                odd.push(arr[i])
            }
        }
        
        let final2 = odd.join(" ") +" "+ even.join(" ")
       return final2.trim()
    }
  }
  console.log(seperationOfOddEven(N, arr,Q))
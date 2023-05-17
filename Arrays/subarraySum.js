
function subarraySum(arr, n, s) {
  {
    for (let i = 0; i < n; i++) {
      let sum = 0
      for (let j = i; j < n; j++) {
        sum += arr[j]
        if (sum === s) return [i + 1, j + 1]
      }
    }
    return [-1]
  }
}

let N = 5, S = 12, A = [1, 2, 3, 7, 5]
let n = 42, sum = 468, arr = [135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134]

console.log(subarraySum(A, N, S))
console.log(subarraySum(arr, n, sum))

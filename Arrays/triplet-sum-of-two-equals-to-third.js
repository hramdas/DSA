const arr = [5, 32, 1, 7, 10, 50, 19, 21, 2]
//Output : 21, 2, 19

function triplet(arr) {
  const n = arr.length
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if ((arr[i] + arr[j] === arr[k]) || (arr[i] + arr[k] === arr[j]) || (arr[j] + arr[k] === arr[i])) {
          console.log("TRIPLET1 :", [arr[i], arr[j], arr[k]])
        }
      }
    }
  }
}
triplet(arr) // O(n^3)


function triplet2(arr) {
  const n = arr.length
  arr.sort((a, b) => a - b) //[ 1, 2, 5, 7, 10, 19, 21, 32, 50 ]
  for (let i = n - 1; i >= 0; i--) {
    let l = 0, r = i + 1
    while (l < r) {
      if (arr[r] + arr[l] === arr[i]) {
        console.log("TRIPLET2 :", [arr[i], arr[l], arr[r]])
        l++
      } else if (arr[r] + arr[l] < arr[i]) {
        l++
      } else r--
    }
  }
}

triplet2(arr) //O(N ^ 2)
let array = [12, 3, 4, 1, 6, 9], sum = 24;

const triplet1 = (array, sum) => {
  let n = array.length

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (array[k] + array[j] + array[i] === sum) {

          console.log("TRIPLET : ", array[i], array[j], array[k])

        }
      }
    }
  }
}

triplet1(array, sum)

const triplet2 = (arr, sum) => {
  arr.sort((a, b) => a - b)
  const n = array.length

  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === sum) {
        console.log("TRIPLET : ", arr[i], arr[l], arr[r])
        l++
      } else if (arr[i] + arr[l] + arr[r] < sum) {
        l++
      } else r--
    }
  }
}

triplet2(array, sum)
const arr = [2, 1, 5, 3, 8, 4, 6, 9, 2]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]   //Swapping
        // var temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp
      }
    }
  };
  return arr;
};
console.log("Bubble Sort :", bubbleSort(arr));


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let sortedArray = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else sortedArray.push(right.shift())
  }

  return [...sortedArray, ...left, ...right]
}

console.log("Merge Sort :", mergeSort(arr))
//Moore’s Voting Algorithm
const arr = [3, 2, 3, 2, 3], n = arr.length
console.log("Majority : ", majority(arr, n));

function majority(arr, n) {
  var index = 0;
  var count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[index] == arr[i]) {
      count++;
    } else count--;
    if (count == 0) {
      index = i;
      count = 1;
    }
  }

  var fre = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[index]) fre++;
  }
  if (fre > n / 2) return arr[index];
  else return -1;
}

console.log("Majority : ", majority2(arr, n));

function majority2(arr, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
  }

  var cur;
  for (key in obj) {
    if (obj[key] > n / 2) return key;
  }
  return -1;
}


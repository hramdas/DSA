countLargestGroup = function (n) {
  var obj = {};

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let val = i;
    while (val > 0) {
      sum += val % 10;
      val = Math.floor(val / 10);
    }
    obj[sum] = obj[sum] ? (obj[sum] += 1) : (obj[sum] = 1);
  }
  let max = 0;
  for (key in obj) {
    if (obj[key] > max) max = obj[key];
  }
  let count = 0;
  161;
  for (key in obj) {
    if (obj[key] == max) count++;
  }
  return count;
};

var n = 13;
console.log(countLargestGroup(n));

var a = [1, 2, 3, 4];
function subArr(a) {
  for (let i = 0; i < a.length; i++) {
    var out = [];
    for (let j = i; j < a.length; j++) {
      out.push(a[j]);
      //res.push(out)
      console.log(out);
      //console.log(i, 'res', res)
    }
  }
}
// subArr(a);

// ----------------------------------------------------- //

let arr = [1, 2, 3, 4];
// let arr = "ABCD";
function subArray(n) {
  let col = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subseq = [];
      for (let k = i; k <= j; k++) {
        subseq.push(arr[k]);
      }
      col.push(subseq);
    }
  }
  return col;
}

console.log(subArray(arr.length));

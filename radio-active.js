// Take a radio active substance add some amount in it daily in how many it will be zero
let x = 5; //gm;
let y = 1; //gm;
let n = 5;
let c = 0;
console.log(remaining(x, c));
function remaining(x, n) {
  if (n == c) return x;
  return remaining(Math.round(x / 2) + y, c + 1);
}

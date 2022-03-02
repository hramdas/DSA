// Take a radio active substance add some amount in it daily
//Calculate remaining amount after  given daya
let x = 5; //gm;
let y = 1; //gm;
let n = 5; //days
let c = 0;
console.log(remaining(x, c));
function remaining(x, n) {
  if (n == c) return x;
  return remaining(Math.round(x / 2) + y, c + 1);
}

// R H, B K, L S, G W, A A

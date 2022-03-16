function one() {
  function two() {
    console.log(a);
  }
  two();
  a = 3;
}
let a = 2;
one();

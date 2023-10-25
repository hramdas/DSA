function scope() {
  console.log("a", a) // undefines
  // console.log("b", b) // ReferenceError: b is not defined
  var a = 'name'
  let b = 'b'
  console.log({ a, b })
}
scope()
// console.log("a", a) // ReferenceError: a is not defined


if (true) {
  var c = 'c'
  let d = 'd'
  console.log('in block scope', c, d)
}
console.log("c out of scpoke", c)
// console.log("d out of scpoke", d ) //ReferenceError: d is not defined





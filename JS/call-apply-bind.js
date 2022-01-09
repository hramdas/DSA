var p1 = {name : "Ramdas"}
function details(){
    this.age = 23,
    this.city = "Pune"
}
details.call(p1)
console.log(p1)


var p2 = {name : "Ramdas"}
function fun2(a, c){
    this.age = a,
    this.city = c
}
fun2.apply(p2, [20, "Pune"])
console.log(p2)



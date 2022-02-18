// var arr = [1, 2, 3];

// arr = arr.map((a) => {
//   return a + 10;
// });

// console.log(arr);

// var obj = {};
// typeof obj;

// if (1) {
//   const a = "Ram";
// }
// console.log(a);

// async function f() {
//   let result = "first!";
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   result = await promise;
//   console.log(result);
// }
// f();

let array = ["a", "b", "c", "d", "e"];
const func = function ([f, ...r]) {
  return (
    r.reduce(function (a, c) {
      return a + c;
    }) + f
  );
};

func(array);

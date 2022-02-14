// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

function isSameTree(a, b) {
  if (a == null && b == null) {
    return true;
  } else if (a.val !== b.val) {
    return false;
  } else {
    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
  }
}

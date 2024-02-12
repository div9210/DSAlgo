const { BinaryTree } = require("./Lecture 1");

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function inorderTraversal(root, inorder) {
  if (root) {
    // LNR
    inorderTraversal(root.left, inorder);
    inorder.push(root.val);
    inorderTraversal(root.right, inorder);
  }
}
// var isValidBST = function (root) {
//   let inorder = [];
//   inorderTraversal(root, inorder);
//   // Check if inorder is sorted
//   return isArraySorted(inorder);
// };

// Have to solve this
function solution(root, max, min) {
  if (root == null) return true;

  if (root.val >= max || root.val <= min) return false;

  // Check for left and right subtree
  let left = solution(root.left, root.val, min);
  let right = solution(root.right, max, root.val);

  return left && right;
}
var isValidBST = function (root) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;
  return solution(root, max, min);
};

let root = {
  val: 5,
  left: { val: 4, left: null, right: null },
  right: {
    val: 6,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
};

console.log(isValidBST(root));

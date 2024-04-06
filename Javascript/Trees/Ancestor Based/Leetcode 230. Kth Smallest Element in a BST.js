const { BST } = require("../BST");

var kthSmallest = function (root, k) {
  let ans = [];
  solve(root, k);
  return ans[k - 1];

  function solve(root, k) {
    if (!root) return;

    // LNR
    if (ans.length != k) {
      solve(root.left, k);
      ans.push(root.val);
      solve(root.right, k);
    }
  }
};

// Same logic written in a different coding style by ChatGPT
// beats everything TC wise
var kthSmallest = function (root, k) {
  let count = 0;
  let result = null;

  inorderTraversal(root);
  return result;

  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorderTraversal(node.right);
  }
};

let Tree = new BST();
Tree.insert(4);
Tree.insert(2);
Tree.insert(5);
Tree.insert(1);

console.log(kthSmallest(Tree.getRoot(), 2));

const { BST } = require("../BST");

function solve(root, k, ans) {
  if (!root) return;

  // LNR
  if (ans.length != k) solve(root.left, k, ans);
  if (ans.length != k) ans.push(root.val);
  if (ans.length != k) solve(root.right, k, ans);
}

var kthSmallest = function (root, k) {
  let ans = [];
  solve(root, k, ans);
  return ans[k - 1];
};

// Same logic written in a different coding style by ChatGPT
// beats everything TC wise
var kthSmallest = function (root, k) {
  let count = 0;
  let result = null;

  const inorderTraversal = function (node) {
    if (node === null) return;
    inorderTraversal(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorderTraversal(node.right);
  };

  inorderTraversal(root);
  return result;
};

let Tree = new BST();
Tree.insert(4);
Tree.insert(2);
Tree.insert(5);
Tree.insert(1);

console.log(kthSmallest(Tree.getRoot(), 2));

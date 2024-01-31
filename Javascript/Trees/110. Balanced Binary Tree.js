const { height } = require("./104. Maximum Depth of Binary Tree");

function isBalanced(root) {
  if (root == null) {
    return true;
  }

  // Solving one case
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  let difference = Math.abs(leftHeight - rightHeight);
  let condition1 = difference <= 1; // Atmost 1

  let condition2 = isBalanced(root.left); // left subtree should be balanced
  let condition3 = isBalanced(root.right); // right subtree should be balanced

  if (condition1 && condition2 && condition3) {
    return true;
  }
  return false;
}

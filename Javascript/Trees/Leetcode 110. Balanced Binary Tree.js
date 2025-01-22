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

// Faster Way
function heightRecursion(root, result) {
  if (root == null) return 0;

  let lh = heightRecursion(root.left, result);
  let rh = heightRecursion(root.right, result);

  // Extra piece of code in height function
  let diff = Math.abs(lh - rh);
  if (diff > 1) {
    result.balanced = false;
  }
  ///////////////////////////////////////////

  return Math.max(lh, rh) + 1;
}

function isBalanced(root) {
  let result = { balanced: true };
  heightRecursion(root, result);
  return result.balanced;
}

function checkValid(root, min, max) {
  if (root == null) {
    // Traversal reached null and
    // No one before returned false
    // Thus, Tree is right so far
    return true;
  }

  // If we come across something that does not come in range
  if (root.val >= max || root.val <= min) {
    return false;
  }

  // root is in range check left and right
  let checkLeft = checkValid(root.left, min, root.val);
  let checkRight = checkValid(root.right, root.val, max);

  return checkLeft && checkRight;
}

var isValidBST = function (root) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;

  return checkValid(root, min, max);
};

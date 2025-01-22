var rangeSumBST = function (root, low, high) {
  if (root == null) return 0;

  let totalSum = 0;
  let inRange = false;

  // Check if in range
  if (root.val >= low && root.val <= high) {
    totalSum += root.val;
    inRange = true;
  }

  if (inRange) {
    // Traverse in both direction
    totalSum +=
      rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
  } else if (root.val < low) {
    // We want bigger values, thus go right
    totalSum += rangeSumBST(root.right, low, high);
  } else if (root.val > high) {
    // We want smaller values, thus go left
    totalSum += rangeSumBST(root.left, low, high);
  }

  return totalSum;
};

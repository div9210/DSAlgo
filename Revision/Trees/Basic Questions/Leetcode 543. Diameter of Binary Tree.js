var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  height(root);
  return maxDiameter;

  function height(root) {
    if (root == null) return 0;

    let lH = height(root.left);
    let rH = height(root.right);

    // In between calculating height
    // For each lH and rH calculate maxDiameter
    // And update if more than the global maxDiameter
    let currentDiameter = lH + rH;
    if (currentDiameter > maxDiameter) {
      maxDiameter = currentDiameter;
    }

    return Math.max(lH, rH) + 1;
  }
};

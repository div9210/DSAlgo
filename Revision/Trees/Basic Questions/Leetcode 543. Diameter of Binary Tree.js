function height(root, diameter) {
  if (root == null) return 0;

  let lH = height(root.left, diameter);
  let rH = height(root.right, diameter);

  // In between calculating height
  // For each lH and rH calculate diameter
  // And update if more than the global diameter
  let currentDiameter = lH + rH;
  if (currentDiameter > diameter[0]) {
    diameter[0] = currentDiameter;
  }

  return Math.max(lH, rH) + 1;
}
var diameterOfBinaryTree = function (root) {
  let diameter = [0];
  height(root, diameter);

  return diameter[0];
};

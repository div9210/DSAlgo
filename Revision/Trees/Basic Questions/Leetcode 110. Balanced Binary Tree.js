function height(root, balanced) {
  if (root == null) return 0;

  let lH = height(root.left, balanced);
  let rH = height(root.right, balanced);

  let diff = Math.abs(lH - rH);
  if (diff > 1) {
    balanced[0] = false;
  }

  return Math.max(lH, rH) + 1;
}
function isBalanced(root) {
  // Balanced BT means
  // At any point the diff between lH and rH should not be more than 1
  let balanced = [true];
  height(root, balanced);
  return balanced[0];
}

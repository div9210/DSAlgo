var maxDepth = function (root) {
  if (root == null) return 0;

  let lH = maxDepth(root.left);
  let rH = maxDepth(root.right);

  return Math.max(lH, rH) + 1;
};

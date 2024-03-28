function isBalanced(root) {
  let balanced = true;
  height(root);
  return balanced;

  function height(root) {
    if (root == null) return 0;

    let lh = height(root.left);
    let rh = height(root.right);

    if (Math.abs(lh - rh) > 1) {
      balanced = false;
    }

    return Math.max(lh, rh) + 1;
  }
}

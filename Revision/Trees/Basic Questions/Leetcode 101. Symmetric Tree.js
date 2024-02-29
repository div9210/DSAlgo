function checkSymmetry(p, q) {
  if (p == null && q == null) {
    return true;
  }

  if (p && q) {
    return (
      p.val == q.val && symmetric(p.left, q.right) && symmetric(p.right, q.left)
    );
  }

  return false;
}
function isSymmetric(root) {
  return checkSymmetry(root.left, root.right);
}

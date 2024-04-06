function symmetric(p, q) {
  if (!p && !q) return true;
  if (p && q) {
    return (
      p.val == q.val && symmetric(p.left, q.right) && symmetric(p.right, q.left)
    );
  }

  return false;
}

var isSymmetric = function (root) {
  return symmetric(root.left, root.right);
};

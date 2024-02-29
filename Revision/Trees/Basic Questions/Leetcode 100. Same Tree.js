var isSameTree = function (p, q) {
  // If both pointers reaches null
  if (p == null && q == null) {
    return true;
  }

  if (p && q) {
    return (
      p.val == q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }

  // if code reaches here that means one is null and one is not null
  return false;
};

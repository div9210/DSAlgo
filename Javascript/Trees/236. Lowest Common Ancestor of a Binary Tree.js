var lowestCommonAncestor = function (root, p, q) {
  // Base Cases
  if (root == null) return null;
  if (root.val == p.val) return p;
  if (root.val == q.val) return q;

  // Use Recursion and fetch the ans for left and right subtree
  let leftAnsNode = lowestCommonAncestor(root.left, p, q);
  let rightAnsNode = lowestCommonAncestor(root.right, p, q);

  // Processing
  if (leftAnsNode == null && rightAnsNode == null) return null;
  else if (leftAnsNode != null && rightAnsNode == null) return leftAnsNode;
  else if (leftAnsNode == null && rightAnsNode != null) return rightAnsNode;
  else {
    // Where both are not null that means
    // 1. p in left and q in right
    // 2. q in left and p in right
    return root;
  }
};

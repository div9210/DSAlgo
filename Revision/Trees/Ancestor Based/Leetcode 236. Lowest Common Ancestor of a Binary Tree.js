var lowestCommonAncestor = function (root, p, q) {
  // Base Cases
  if (root == null) return null;
  if (root.val == p.val) {
    // Found p
    return p;
  }

  if (root.val == q.val) {
    // Found q
    return q;
  }

  // Search in both left and right subtree
  let leftSearch = lowestCommonAncestor(root.left);
  let rightSearch = lowestCommonAncestor(root.right);

  // Multiple answer can come from left and right search
  if (leftSearch == null && rightSearch == null) {
    // Not found
    return null;
  } else if (leftSearch && !rightSearch) {
    return leftSearch;
  } else if (!leftSearch && rightSearch) {
    return rightSearch;
  } else {
    // If left and right both returns not null, then our root is the common ancestor
    return root;
  }
};

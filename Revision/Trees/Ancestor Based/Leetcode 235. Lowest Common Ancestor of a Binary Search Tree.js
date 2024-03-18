var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;

  // If both are small then both exists in the left subtree
  // So discarding the current root
  // and searching for an answer in the left subtree
  if (p.val < root.val && q.val < root.val) {
    let leftSearch = lowestCommonAncestor(root.left, p, q);
    return leftSearch;
  }

  if (p.val > root.val && q.val > root.val) {
    let rightSearch = lowestCommonAncestor(root.right, p, q);
    return rightSearch;
  }

  // If exists a scenario where this scenario fails
  // Which is 2 scenarios
  // 1. I have reached a node in which if p exists at right q exists at left
  // and vice versa

  // 2. Or i am standing at either p or q
  // Now it does not matter where the other node exists left or right
  // I have to return root
  return root;
};

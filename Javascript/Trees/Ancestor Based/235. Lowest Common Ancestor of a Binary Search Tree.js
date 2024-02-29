var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;

  // If both exits in left
  // Go left till the condition arrive when both do not exist in left
  // In that condition return root (from last line)
  if (root.val > p.val && root.val > q.val) {
    // Going left, when cannot go left anymore return from last line
    // Storing that in leftAns and returning it
    let leftAns = lowestCommonAncestor(root.left, p, q);
    return leftAns;
  }

  // Same way if both exists in right
  // Go right till the condition arrive when both do not exist in right
  // In that condition return root (from last line)
  if (root.val < p.val && root.val < q.val) {
    // Going left, when cannot go left anymore return from last line
    // Storing that in leftAns and returning it
    let rightAns = lowestCommonAncestor(root.right, p, q);
    return rightAns;
  }

  // Now in other cases either p exists in left and q exists in right
  // OR q exists in left and p exists in right
  // in both the cases we have to return root
  // And for other two cases we have to return root only from the last line
  // So writing it directly without writing any condition
  return root;
};

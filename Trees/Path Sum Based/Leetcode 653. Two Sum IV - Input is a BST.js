function inorderTraversal(root, inorder) {
  if (root) {
    // LNR
    inorderTraversal(root.left, inorder);
    inorder.push(root.val);
    inorderTraversal(root.right, inorder);
  }
}
var findTarget = function (root, k) {
  // Do inorder of BST - Sorted
  // Solve by two pointer approach
  let inorder = [];
  inorderTraversal(root, inorder);

  let s = 0,
    e = inorder.length - 1;

  while (s < e) {
    let sum = inorder[s] + inorder[e];
    if (sum == k) return true;
    else if (sum > k) {
      e--;
    } else if (sum < k) {
      s++;
    }
  }

  return false;
};

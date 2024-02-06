function MorrisTraversal() {
  let ans = [];
  let curr = root;
  while (curr) {
    if (curr.left == null) {
      // Visit the node
      ans.push(curr.val);
      // Go to right
      curr = curr.right;
    } else {
      // curr node -> left is not null
      // Find the predecessor
      let pred = curr.left;
      while (pred.right && pred.right != curr) {
        pred = pred.right;
      }
      // Loop can break due to 2 conditions
      // 1. There is no pred -> right
      if (!pred.right) {
        // Establish a connection
        pred.right = curr;
        // Continue inorder
        curr = curr.left;
      }
      // 2. pred.right is back to curr, i.e pred connection already established
      else {
        // Destroy the connection
        pred.right = null;
        // visit the node
        ans.push(curr.val);
        // Go always right after visiting the node (L N R)
        curr = curr.right;
      }
    }
  }

  return ans;
}

var inorderTraversal = function (root) {
  // Using morris traversal, i.e Iterative Approach of Inorder
  let ans = MorrisTraversal(root);
  return ans;
};

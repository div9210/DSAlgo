var inorderTraversal = function (root) {
  let ans = [];
  if (root == null) return ans;

  // Start the iteration
  let currentNode = root;
  while (currentNode) {
    // I will check if the left exists
    // If not it's pretty simple we are done with L and now we will do N and R
    if (currentNode.left == null) {
      // In LNR
      // L is done
      // Performing N
      ans.push(currentNode.val);
      // Performing R
      currentNode = currentNode.right;
    } else {
      // If left node exists
      // Find the immediate predecessor
      let predecessor = currentNode.left;
      // Check if anything bigger than currentNode.left exists in the left subtree
      // If yes then that thing will be predecessor
      while (predecessor.right && predecessor.right != currentNode) {
        predecessor = predecessor.right;
      }

      // While loop can break due to 2 conditions
      // 1. Predecessor Found, that means there is nothing at right of predecessor
      if (predecessor.right == null) {
        // That is our way of coming back to the node currentNode is pointing to at this moment
        // Create the way
        predecessor.right = currentNode;
        // Now we have successfully created a bridge to come back
        // We can move to L operation since we know how to come back
        currentNode = currentNode.left;
      }

      // 2. Predecessor points to a node whose right is currentNode (The bridge)
      if (predecessor.right == currentNode) {
        // This means we have visited through this node already and created a bridge and crossed using that bridge
        // And now we are back
        // So destroy the bridge now, currentNode is already at the right position
        predecessor.right = null;
        // Since we are done now with the left of currentNode remaining operations are N and R
        // visit the currentNode (N)
        ans.push(currentNode.val);
        // Move right (R)
        currentNode = currentNode.right;
      }
    }
  }

  return ans;
};

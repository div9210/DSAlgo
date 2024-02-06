function solve(root, targetSum) {
  if (root == null) {
    return 0; // Return 0 if root is null
  }

  let count = 0;
  if (root.val == targetSum) {
    count++; // Increment count if current node value equals targetSum
  }

  // Recursively search for paths starting from left and right children
  count += solve(root.left, targetSum - root.val);
  count += solve(root.right, targetSum - root.val);

  return count; // Return the count of paths found
}

var pathSum = function (root, targetSum) {
  if (!root) {
    return 0; // Return 0 if root is null
  }

  // Recursively search for paths starting from the root node
  let pathsFromRoot = solve(root, targetSum);

  // Recursively search for paths starting from left and right children
  let pathsFromLeft = pathSum(root.left, targetSum);
  let pathsFromRight = pathSum(root.right, targetSum);

  // Total paths found is the sum of paths found starting from root, left, and right
  return pathsFromRoot + pathsFromLeft + pathsFromRight;
};

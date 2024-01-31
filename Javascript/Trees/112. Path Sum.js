function solve(root, targetSum, currSum) {
  // Base Case
  if (root == null) return false;

  // If root is not null, add it to currSum
  currSum += root.val;

  // If root is a leaf node, check the condition
  if (root.left == null && root.right == null) {
    // verify
    return currSum == targetSum;
  }

  // Solve for left subtree
  let leftAns = solve(root.left, targetSum, currSum);
  let rightAns = solve(root.right, targetSum, currSum);

  return leftAns || rightAns;
}
var hasPathSum = function (root, targetSum) {
  let ans = solve(root, targetSum, 0);
  return ans;
};

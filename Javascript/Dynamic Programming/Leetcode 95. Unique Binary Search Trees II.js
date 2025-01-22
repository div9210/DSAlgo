/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) return [];
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(null));
  let result = solve(1, n);
  return result;

  function solve(start, end) {
    if (start > end) return [null];
    if (start == end) return [new TreeNode(start)];

    // Check if dp has the result
    if (dp[start][end] != null) {
      return dp[start][end];
    }

    let uniqueTrees = [];
    // Treat each node as a root node
    for (let i = start; i <= end; i++) {
      // Fetch all possible trees from the left
      let leftPossible = solve(start, i - 1);
      // Fetch all possible trees from the right
      let rightPossible = solve(i + 1, end);

      // Create all possible combination of left and right
      for (let j = 0; j < leftPossible.length; j++) {
        for (let k = 0; k < rightPossible.length; k++) {
          // Create the root node using i
          let rootNode = new TreeNode(i);
          rootNode.left = leftPossible[j];
          rootNode.right = rightPossible[k];
          // Store the tree in the uniqueTrees
          uniqueTrees.push(rootNode);
        }
      }
    }

    dp[start][end] = uniqueTrees;
    return uniqueTrees;
  }
};

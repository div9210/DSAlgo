function solve(root, targetSum, currSum, currPath, result) {
  if (root == null) return;

  currSum += root.val;
  currPath.push(root.val);

  // If root is a leaf node
  if (root.left == null && root.right == null) {
    if (currSum === targetSum) {
      // Push a copy of currPath
      result.ans.push([...currPath]);
    }
  }

  // Continue exploring both left and right subtrees
  solve(root.left, targetSum, currSum, currPath, result);
  solve(root.right, targetSum, currSum, currPath, result);

  // Backtrack: remove the last element from currPath
  currPath.pop();
}

var pathSum = function (root, targetSum) {
  let result = {
    ans: [],
  };
  let currSum = 0;
  let currPath = [];
  solve(root, targetSum, currSum, currPath, result);
  return result.ans;
};

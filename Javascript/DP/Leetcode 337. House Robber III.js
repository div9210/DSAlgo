/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  let maxRob = solve(root);
  return maxRob;

  function solve(root) {
    if (root == null) return 0;

    let inclusion = root.val;
    if (root.left) {
      inclusion += solve(root.left.left) + solve(root.left.right);
    }
    if (root.right) {
      inclusion += solve(root.right.left) + solve(root.right.right);
    }

    let exclusion = solve(root.left) + solve(root.right);

    return Math.max(inclusion, exclusion);
  }
};

function solve(root, k, ans) {
  if (k == 0 && ans.length == 0) ans[0] = root;
  if (root) {
    // LNR
    solve(root.left, k, ans);
    k--;
    solve(root.right, k, ans);
  }
}
var kthSmallest = function (root, k) {
  let ans = [];
  solve(root, k, ans);
  return ans[0];
};

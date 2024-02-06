class Solution {
  //Function to return the maximum sum of non-adjacent nodes.
  solve(root) {
    if (root == null) return [0, 0];

    let left = this.solve(root.left);
    let right = this.solve(root.right);

    // Calculate sum including the root
    let sumIncludingRoot = root.data + left[1] + right[1]; // Index 1 means non inclusive of left and right
    let sumExcludingRoot =
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [sumIncludingRoot, sumExcludingRoot];
  }
  getMaxSum(root) {
    let ans = this.solve(root);
    return Math.max(ans[0], ans[1]);
  }
}

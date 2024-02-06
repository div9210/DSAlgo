class Solution {
  toSumTree(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) {
      let originalValue = root.data;
      root.data = 0;
      return originalValue;
    }

    let lSum = this.toSumTree(root.left);
    let rSum = this.toSumTree(root.right);

    // Current node will set lSum + rSum as it's value
    // But return lSum + rSum + currentNodeOriginalValue
    let currentNodeOriginalValue = root.data;
    root.data = lSum + rSum;

    return root.data + currentNodeOriginalValue;
  }
}

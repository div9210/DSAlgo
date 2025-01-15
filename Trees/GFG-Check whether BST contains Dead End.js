class Solution {
  solve(root, byRefVars) {
    if (root == null) return;

    // NLR
    // Visit the node
    byRefVars.visited.set(root.data, true);
    // If the visited node is a leaf node
    // check if leaf node val + 1 and val - 1
    // are already visited i.e exists in the tree
    if (root.left == null && root.right == null) {
      // Leaf node
      let plus1 = root.data + 1;
      let minus1 = root.data - 1 === 0 ? root.data : root.data - 1;

      // If both plus1 and minus1 exists in the tree
      if (byRefVars.visited.get(plus1) && byRefVars.visited.get(minus1)) {
        // Dead end exists
        byRefVars.containsDeadEnd = true;
        return;
      }
    }

    // L
    this.solve(root.left, byRefVars);
    // R
    this.solve(root.right, byRefVars);
  }
  isDeadEnd(root) {
    let byRefVars = {
      visited: new Map(),
      containsDeadEnd: false,
    };

    this.solve(root, byRefVars);
    return byRefVars.containsDeadEnd;
  }
}

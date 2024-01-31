class Solution {
  //Function to return a list containing the bottom view of the given tree.
  solve(root, result) {
    let q = [];
    q.push({ node: root, level: 0 });
    while (q.length > 0) {
      let { node, level } = q.shift();
      // Check if an answer exist for this level (This worked in top view)
      //   if (!result.get(level)) {
      //     result.set(level, node.data);
      //   }
      // But here
      // No matter what store the node for level
      // So automatically every node in the vertical level will be updated
      // by the next node in vertical level, when the execution ends
      // We will have list of last nodes for each vertical level i.e Bottom View
      result.set(level, node.data);

      // Store left and right child if they exists
      if (node.left) {
        q.push({ node: node.left, level: level - 1 });
      }

      if (node.right) {
        q.push({ node: node.right, level: level + 1 });
      }
    }
  }
  bottomView(root) {
    let result = new Map();
    this.solve(root, result);

    // Construct an array of sorted entries
    let sortedEntries = [...result.entries()].sort((a, b) => a[0] - b[0]);

    // Extract values from the sorted entries
    let sortedValues = sortedEntries.map((entry) => entry[1]);

    return sortedValues;
  }
}

class Solution {
  levelorderForBottomView(root, ansMap) {
    if (root == null) return ansMap;

    let q = [];
    q.push({ node: root, verticalLevel: 0 });

    while (q.length > 0) {
      let { node, verticalLevel } = q.shift();

      // Don't need to check if already processed
      // even if already processed we will process it so that the new value will outdate and replace the old one
      ansMap.set(verticalLevel, node.data);

      // Push left and right children in q (if exists)
      if (node.left)
        q.push({ node: node.left, verticalLevel: verticalLevel - 1 });

      if (node.right)
        q.push({ node: node.right, verticalLevel: verticalLevel + 1 });
    }
  }
  bottomView(root) {
    let ansMap = new Map();
    this.levelorderForBottomView(root, ansMap);

    let sortedEntries = [...ansMap.entries()].sort((a, b) => a[0] - b[0]);
    return sortedEntries.map((e) => e[1]);
  }
}

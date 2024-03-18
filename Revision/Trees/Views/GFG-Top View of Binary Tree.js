class Solution {
  levelorderForTopView(root, ansMap) {
    // Perform level order traversal
    if (root == null) return ansMap;

    let q = [];
    q.push({ node: root, level: 0 });

    while (q.length > 0) {
      let front = q.shift();
      // Process this front if the level of front is not already processed
      if (!ansMap.get(level)) {
        ansMap.set(front.level, front.node.data);
      }

      // Push left and right children (if exists)
      if (front.left) q.push({ node: front.left, level: front.level - 1 });
      if (front.right) q.push({ node: front.right, level: front.level + 1 });
    }
  }
  topView(root) {
    let ansMap = new Map();
    this.levelorderForTopView(root, ansMap);
    // Sort on the basis of keys
    let sortedEntries = [...ansMap.entries()].sort((a, b) => a[0] - b[0]);
    // return the values
    return sortedEntries.map((e) => e[1]);
  }
}

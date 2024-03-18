// Left View
class Solution {
  preorderForLeftView(root, currentLevel, ans) {
    if (root) {
      // N L R
      // console.log(root.data);
      if (currentLevel == ans.length) {
        // This means we have not visited any node for the currentLevel
        // And this is indeed the first time we are visiting a node for this level
        ans.push(root.data);
      }
      this.preorderForLeftView(root.left, currentLevel + 1, ans);
      this.preorderForLeftView(root.right, currentLevel + 1, ans);
    }
  }

  leftView(root) {
    let ans = [];
    let currentLevel = 0;
    this.preorderForLeftView(root, currentLevel, ans);
    return ans;
  }
}

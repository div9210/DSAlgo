function preorderForLeftView(root, currentLevel, ans) {
  if (root) {
    // N L R --> But for right view N R L
    // console.log(root.data);
    if (currentLevel == ans.length) {
      // This means we have not visited any node for the currentLevel
      // And this is indeed the first time we are visiting a node for this level
      ans.push(root.val);
    }
    preorderForLeftView(root.right, currentLevel + 1, ans);
    preorderForLeftView(root.left, currentLevel + 1, ans);
  }
}
var rightSideView = function (root) {
  let ans = [];
  let currentLevel = 0;
  preorderForLeftView(root, currentLevel, ans);
  return ans;
};

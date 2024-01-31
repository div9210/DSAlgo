// Right View Of a Tree
class Solution {
  solve(root, level, rightView) {
    if (root == null) return;

    if (rightView.length == level) {
      // Since level is starting from 0 i.e one step back
      // Still equal to size of array
      // That means we have one less element in the array i.e current root Node
      rightView.push(root.data);
    }

    // Right SubTree
    this.solve(root.right, level + 1, rightView);

    // Left SubTree
    this.solve(root.left, level + 1, rightView);
  }

  rightView(root) {
    let level = 0;
    let rightView = [];
    this.solve(root, level, rightView);
    return rightView;
  }
}

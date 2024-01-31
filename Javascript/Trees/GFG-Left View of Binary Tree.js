const { BinaryTree } = require("./Lecture 1");

class Solution {
  solve(root, level, leftView) {
    if (root == null) return;

    if (leftView.length == level) {
      // Since level is starting from 0 i.e one step back
      // Still equal to size of array
      // That means we have one less element in the array i.e current root Node
      leftView.push(root.value);
    }

    // Left SubTree
    this.solve(root.left, level + 1, leftView);

    // Right SubTree
    this.solve(root.right, level + 1, leftView);
  }

  leftView(root) {
    let level = 0;
    let leftView = [];
    this.solve(root, level, leftView);
    return leftView;
  }
}

// Example usage:
const tree = new BinaryTree();
console.log("Creating the tree...");
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

let sol = new Solution();
let leftView = sol.leftView(tree.getRoot());
console.log("leftView", leftView);

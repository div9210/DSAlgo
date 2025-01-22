const { BinaryTree } = require("../Lecture 1");

class Solution {
  solveLeft(root, result) {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      return;
    }

    result.push(root.data);
    if (root.left) {
      this.solveLeft(root.left, result);
    } else {
      this.solveLeft(root.right, result);
    }
  }

  solveRight(root, result) {
    if (root == null) return;

    if (root.left == null && root.right == null) {
      return;
    }

    if (root.right) {
      this.solveRight(root.right, result);
    } else {
      this.solveRight(root.left, result);
    }

    result.push(root.data);
  }

  solveLeaf(root, result) {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      result.push(root.data);
      return;
    }

    // Traverse left and right
    this.solveLeaf(root.left, result);
    this.solveLeaf(root.right, result);
  }
  boundary(root) {
    let result = [];
    if (root == null) return result;
    result.push(root.data);

    // Solve for left boundary
    this.solveLeft(root.left, result);
    this.solveLeaf(root.left, result);

    // Solve for right boundary
    this.solveLeaf(root.right, result);
    this.solveRight(root.right, result);

    return result;
  }
}

let Tree = new BinaryTree();
// Tree.insert(6);
// Tree.insert(10);
// Tree.insert(15);
// Tree.insert(7);
// Tree.insert(3);
// Tree.insert(4);
// Tree.insert(5);

Tree.insert(2);
Tree.insert(1);
Tree.insert(3);

let sol = new Solution();
let result = sol.boundary(Tree.getRoot());
console.log("result", result);

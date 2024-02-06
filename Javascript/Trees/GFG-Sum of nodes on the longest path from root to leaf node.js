const { BinaryTree } = require("./Lecture 1");

class Solution {
  constructor() {
    this.maxPath = 0;
    this.maxSum = 0;
  }

  solve(root, currPath, currSum) {
    if (root == null) return;

    currPath++;
    currSum += root.data;

    // If leaf node
    if (root.left == null && root.right == null) {
      // Either path is longer
      // If not more but equal to maxPath
      // then update only when currSum is more than maxSum
      if (
        currPath > this.maxPath ||
        (currPath === this.maxPath && currSum > this.maxSum)
      ) {
        this.maxPath = currPath;
        this.maxSum = currSum;
      }
    }

    this.solve(root.left, currPath, currSum);
    this.solve(root.right, currPath, currSum);
  }

  sumOfLongRootToLeafPath(root) {
    let currSum = 0;
    let currPath = 0;
    this.solve(root, currPath, currSum);
    return this.maxSum;
  }
}

let Tree = new BinaryTree();
Tree.insert(7);
Tree.insert(4);
Tree.insert(5);
Tree.insert(10);
Tree.insert(8);
Tree.insert(6);

let solve = new Solution();
console.log(solve.sumOfLongRootToLeafPath(Tree.getRoot()));

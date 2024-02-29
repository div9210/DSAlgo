const { BinaryTree } = require("../Lecture 1");
// This solution is correct but TLE
class Solution {
  solve(root, level, result) {
    if (root == null) return;

    if (!result.get(level)) {
      result.set(level, [root.value]);
    } else {
      let prev = result.get(level);
      prev.push(root.value);
      result.set(level, prev);
    }

    // Make calls for left and right subtrees
    this.solve(root.left, level + 1, result);

    this.solve(root.right, level, result);
  }
  diagonal(root) {
    let result = new Map();
    let level = 0;
    this.solve(root, level, result);
    // Sort the result map based on keys
    let ans = [];
    for (let [, value] of result) {
      ans.push(...value);
    }
    return ans;
  }
}

// This works
class Solution2 {
  diagonal(root) {
    let result = [];
    let q = [];
    q.push(root);

    while (q.length > 0) {
      let node = q.shift();
      let temp = node;
      while (temp != null) {
        result.push(temp.value);
        // If a left node exists we will deal with later
        // Hence push it in queue
        if (temp.left) q.push(temp.left);

        // Move rightwards
        temp = temp.right;
      }
    }

    return result;
  }
}

let Tree = new BinaryTree();
Tree.insert(10);
Tree.insert(20);
Tree.insert(5);
Tree.insert(4);
Tree.insert(7);
Tree.insert(45);
Tree.insert(17);
Tree.insert(19);
Tree.insert(25);

let sol = new Solution2();

let result = sol.diagonal(Tree.getRoot());
console.log("result", result);

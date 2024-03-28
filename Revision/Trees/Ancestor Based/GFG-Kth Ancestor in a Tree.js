const { BinaryTree } = require("../../../Javascript/Trees/Lecture 1");

class Solution {
  solve(root, node) {
    if (root === null) return false;

    if (root.data === node) {
      return true;
    }

    let foundInLeft = solve(root.left, node, ans);
    let foundInRight = solve(root.right, node, ans);

    if (foundInLeft || foundInRight) {
      if (ans[1] > 0) ans[1]--;
      else if (ans[1] === 0) {
        ans[0] = root.data;
        // To prevent further decrement of k
        ans[1]--;
      }
      return true;
    }

    return false;
  }

  kthAncestor(root, k, node) {
    let ans = [null, k];
    this.solve(root, node, ans);
    return ans[0];
  }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(9);
tree.insert(7);
tree.insert(8);
tree.insert(4);
tree.insert(3);
tree.insert(1);
let sol = new Solution();
console.log(sol.kthAncestor(tree.getRoot(), 2, { value: 8 }));

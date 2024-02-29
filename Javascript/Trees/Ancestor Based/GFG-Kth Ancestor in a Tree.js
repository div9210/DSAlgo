const { BinaryTree } = require("../Lecture 1");
class Solution {
  solve(root, node, res) {
    if (root == null) return null;
    if (root.data == node) return root;
    if (res.ans != -1) {
      // We have already set the ans
      // return whatever
      return null;
    }

    let leftSearch = this.solve(root.left, node, res);
    let rightSearch = this.solve(root.right, node, res);

    if (!leftSearch && !rightSearch) return null;

    if (res) {
      res.k--;
      if (res.k === 0) {
        res.ans = root.data;
      }
    }

    if (leftSearch && !rightSearch) return leftSearch;
    else if (!leftSearch && rightSearch) return rightSearch;
  }

  kthAncestor(root, k, node) {
    let res = { k, ans: -1 };
    this.solve(root, node, res);
    // console.log(res);
    return res.ans;
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
sol.kthAncestor(tree.getRoot(), 2, { data: 8 });

const { BinaryTree } = require("../Lecture 1");
class Solution {
  kthAncestor(root, k, node) {
    let res = { k, ans: -1 };
    solve(root, node, res);
    return res.ans;

    function solve(root, node) {
      // Base Case
      if (root == null) return false;
      // If found
      if (root.data == node) return true;

      // If previously we have set an answer, there is no need
      // to set it again and there is no need to traverse it further
      if (res.ans != -1) {
        // We have already set the ans
        // return whatever since we are setting the ans in res
        return null;
      }

      let leftSearch = solve(root.left, node);
      let rightSearch = solve(root.right, node);

      // If not found in left and right subtree
      if (!leftSearch && !rightSearch) return false;

      // If code reaches here, that means one ancestor found
      res.k--;
      if (res.k === 0) {
        res.ans = root.data;
      }

      return true;
    }
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

function heightTree(root) {
  if (root == null) return 0;

  let leftHeight = heightTree(root.left);
  let rightHeight = heightTree(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

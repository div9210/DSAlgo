const { BinaryTree } = require("./Lecture 1");

class Solution {
  inorderPred(root, x) {
    let curr = root;
    let ansNode = null;
    while (curr) {
      if (curr.value < x.data) {
        // Either this is the ans or ans exists at right
        ansNode = curr;
        curr = curr.right;
      } else {
        // Go left
        curr = curr.left;
      }
    }

    return ansNode;
  }
}

let Tree = new BinaryTree();
Tree.insert(5);
Tree.insert(7);
Tree.insert(8);
Tree.insert(4);
Tree.insert(3);
Tree.insert(2);
Tree.insert(1);

let sol = new Solution();
let x = { data: 5 };
let result = sol.inorderPred(Tree.getRoot(), x);
console.log("result", result);

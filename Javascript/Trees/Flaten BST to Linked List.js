const { BinaryTree, Node } = require("./Lecture 1");

// Alternate way
function inorderT(root, preorder, prev) {
  if (root != null) {
    // L N R
    inorderT(root.left, preorder, prev);
    prev.left = null;
    prev.right = root;
    prev = root;
    // preorder.push(root);
    inorderT(root.right, preorder, prev);
  }
}
var flatten = function (root) {
  let preorder = [];
  let dummy = new Node(-1);
  let prev = dummy;
  inorderT(root, preorder, prev);
  prev.left = prev.right = null;
  return dummy.right;
};

let Tree = new BinaryTree();
Tree.insert(5);
Tree.insert(9);
Tree.insert(3);
Tree.insert(4);
Tree.insert(2);
Tree.insert(1);

let root = flatten(Tree.getRoot());
console.log(root);

const { BinaryTree } = require("./Lecture 1");

function solve(root, result, level, row) {
  if (root == null) return;

  if (!result.get(level)) {
    // First time for this level
    result.set(level, [{ val: root.val, row: row }]);
  } else {
    let prev = result.get(level);
    // Don't push the new node directly
    // Rather check if some node exists for the same row too
    // that means both same row and level
    let i = prev.findIndex((e) => e.row == row);
    if (i != -1) {
      if (prev[i].val > root.val) {
        arr.splice(index, 0, root.val); // Insert to the right of the already present element
      } else {
        arr.splice(i + 1, 0, root.val); // Insert to the left of the already present element
      }
    } else {
      prev.push({ val: root.val, row: row });
    }
    result.set(level, prev);
  }

  // Left subtree
  solve(root.left, result, level - 1, row + 1);

  // Right subtree
  solve(root.right, result, level + 1, row + 1);
}

var verticalTraversal = function (root) {
  let result = new Map();
  let level = 0;
  let row = 0;
  solve(root, result, level, row);

  let sorted = [...result.entries()].sort((a, b) => a[0] - b[0]);

  let values = sorted.map((entry) => {
    return entry[1];
  });

  return values.map((arr) => {
    return arr.map((e) => e.val);
  });
};

let Tree = new BinaryTree();
Tree.insert(5);
Tree.insert(9);
Tree.insert(7);
Tree.insert(4);
Tree.insert(2);
Tree.insert(3);

console.log(verticalTraversal(Tree.getRoot()));

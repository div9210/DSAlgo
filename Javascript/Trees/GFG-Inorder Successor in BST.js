const { BinaryTree } = require("./Lecture 1");
// TLE
// class Solution {
//   // returns the inorder successor of the Node x in BST (rooted at 'root')
//   inorder(root, x, ans) {
//     if (root && ans.length == 0) {
//       // L N R
//       this.inorder(root.left, x, ans);
//       if (ans.length == 0 && root.value > x.data) {
//         ans.push(root.value);
//       }
//       this.inorder(root.right, x, ans);
//     }
//   }
//   inOrderSuccessor(root, x) {
//     let ans = [];
//     this.inorder(root, x, ans);
//     return ans[0];
//   }
// }

class Solution {
  // returns the inorder successor of the Node x in BST (rooted at 'root')
  inOrderSuccessor(root, x) {
    let successor = null;
    let curr = root;
    while (curr) {
      if (curr.data > x.data) {
        // It might be the ans, but check left too
        successor = curr;
        curr = curr.left;
      } else {
        // If it is less than or equal
        // Just go right
        curr = curr.right;
      }
    }

    return successor;
  }
}

let Tree = new BinaryTree();
Tree.insert(2);
Tree.insert(1);
Tree.insert(3);

let sol = new Solution();
let x = { data: 2 };
let result = sol.inOrderSuccessor(Tree.getRoot(), x);
console.log("result", result);

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (this.root == null) {
      // first node
      this.root = new Node(val);
    } else {
      this.insertHandler(this.root, val);
    }
  }

  insertHandler(root, val) {
    if (root == null) {
      let newNode = new Node(val);
      return newNode;
    }

    if (val < root.data) {
      root.left = this.insertHandler(root.left, val);
    } else {
      // val > root.data
      root.right = this.insertHandler(root.right, val);
    }

    return root;
  }

  inorderSuccessor(root = this.root, val) {
    let curr = root;
    let successor = -1;
    while (curr) {
      if (curr.data > val) {
        successor = curr.data;
        // But a smaller answer can exist at the left
        // smaller but yet bigger than the val
        curr = curr.left;
      } else {
        // go right
        curr = curr.right;
      }
    }

    return successor;
  }

  getRoot() {
    return this.root;
  }
}
class Solution {
  findLeastGreater(arr, n) {
    // Iterate the array backwards
    let bst = new BST();
    for (let i = n - 1; i >= 0; i--) {
      let val = arr[i];
      bst.insert(val);
      // Find the inorder successor of the val
      let successor = bst.inorderSuccessor(bst.getRoot(), val);
      // Replace the curr element in arr with successor
      arr[i] = successor;
    }

    return arr;
  }
}

let sol = new Solution();
let arr = [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28];
let res = sol.findLeastGreater(arr, arr.length);
console.log("res", res);

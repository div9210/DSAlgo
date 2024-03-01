class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  constructBSTFromInorder(inorder, start, end) {
    if (start > end) return null;
    let mid = Math.floor(start + (end - start) / 2);

    // create a node
    let root = new TreeNode(inorder[mid]);

    root.left = this.constructBSTFromInorder(inorder, start, mid - 1);
    root.right = this.constructBSTFromInorder(inorder, mid + 1, end);

    return root;
  }

  deleteNode(root, val) {
    if (root == null) return null;

    if (val == root.value) {
      // 4 Cases
      // 1. left is not null but right is null
      if (root.left == null && root.right == null) {
        // leaf node
        return null;
      } else if (root.left != null && root.right == null) {
        // This means after deleting root, we have to preserve root.left
        let leftSubTree = root.left;
        return leftSubTree; // as root
      } else if (root.left == null && root.right != null) {
        // This means after deleting root, we have to preserve root.right
        let rightSubTree = root.right;
        return rightSubTree; // as root
      } else {
        // Both left and right of root are not null
        // Here we have 2 options
        // 1. Find the max in the left SubTree
        // 2. Find the min in the right SubTree
        // Let's work with 1
        let maxNode = this.findMax(root.left);
        if (maxNode) {
          root.value = maxNode.value;
          // Delete the maxNode now
          root.left = this.deleteNode(root.left, maxNode.value);
        }
      }
    } else if (val < root.data) {
      // Search in left
      root.left = this.deleteNode(root.left, val);
    } else {
      root.right = this.deleteNode(root.right, val);
    }

    return root;
  }

  findMax(root) {
    if (!root) return null;
    let temp = root;
    while (temp.right) {
      temp = temp.right;
    }

    return temp;
  }

  insert(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
    } else {
      this.insertAfter(this.root, val);
    }
  }

  insertAfter(root, val) {
    if (root === null) {
      let newNode = new TreeNode(val);
      return newNode;
    }

    if (val < root.value) {
      root.left = this.insertAfter(root.left, val);
    } else if (val > root.value) {
      root.right = this.insertAfter(root.right, val);
    }

    return root;
  }

  searchNode(root, val) {
    if (root == null) return null;
    let left = null;
    let right = null;
    if (val == root.value) {
      return root;
    } else if (val > root.value) {
      // Search in right
      right = this.searchNode(root.right, val);
    } else {
      // Search in left
      left = this.searchNode(root.left, val);
    }

    return left || right;
  }

  nodePresent(root, val) {
    if (!root) return false;
    if (root.value == val) return true;
    let leftAns = false;
    let rightAns = false;
    if (val < root.value) {
      leftAns = this.nodePresent(root.left, val);
    } else {
      rightAns = this.nodePresent(root.right, val);
    }

    return leftAns || rightAns;
  }

  levelOrderTraversal(root) {
    if (!root) return null;
    let q = [];
    q.push(root);
    q.push(null);
    let traversal = "";
    while (q.length > 0) {
      let front = q.shift();
      if (!front) {
        // Level Complete
        if (q.length > 0) q.push(null);
        traversal += "\n";
      } else {
        // Push left and right children (if any)
        traversal += "| " + front.value + " |";
        if (front.left) q.push(front.left);
        if (front.right) q.push(front.right);
      }
    }

    return traversal;
  }
}

// Example usage:
// const bst = new BST();
// let root = bst.getRoot();
// bst.insert(5);
// bst.insert(3);
// bst.insert(7);
// bst.insert(1);
// bst.insert(4);
// bst.insert(6);
// bst.insert(8);
// bst.insert(9);

// console.log(bst.levelOrderTraversal(bst.getRoot()));
// console.log("Node Present:", bst.nodePresent(bst.getRoot(), 7));
// console.log("Node:", bst.searchNode(bst.getRoot(), 5));
// console.log("Delete Node:", bst.deleteNode(bst.getRoot(), 8));
// console.log("After Deletion");
// console.log(bst.levelOrderTraversal(bst.getRoot()));

// let resultBST = bst.constructBSTFromInorder([10, 20, 30, 40, 50, 60, 70], 0, 6);
// console.log(resultBST);
// console.log(bst.levelOrderTraversal(resultBST));

module.exports = {
  BST,
};

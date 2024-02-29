class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // If root is not null, that means there exists a tree
    let currentNode = this.root;
    while (currentNode) {
      if (val >= currentNode.data) {
        // Search for a place at right
        if (currentNode.right == null) {
          // This is a valid place for newNode at right
          // Thus place it
          currentNode.right = newNode;
          break;
        }
        // Move currentNode to right
        currentNode = currentNode.right;
      } else {
        // Search for a place at left
        if (currentNode.left == null) {
          // This is a valid place for newNode
          // Hence place it here
          currentNode.left = newNode;
          break;
        }
        // Move currentNode to left
        currentNode = currentNode.left;
      }
    }
  }

  levelOrderTraversal() {
    if (this.root == null) return;

    let TreeView = "";
    let q = [];
    q.push(this.root);
    q.push(null);

    while (q.length > 0) {
      let front = q.shift();
      if (front == null) {
        // Level complete
        if (q.length > 0) q.push(null); // For next level end
        TreeView += "\n";
      } else {
        // Process the front node
        TreeView += "|" + front.data + "|";
        // Push the children (if exists)
        if (front.left) q.push(front.left);
        if (front.right) q.push(front.right);
      }
    }

    console.log(TreeView);
  }

  preOrderTraversal(preOrder, root = this.root) {
    // N L R
    if (root != null) {
      //   console.log(root.data);
      preOrder.push(root.data);
      this.preOrderTraversal(preOrder, root.left);
      this.preOrderTraversal(preOrder, root.right);
    }
  }

  postOrderTraversal(postOrder, root = this.root) {
    // L R N
    if (root != null) {
      this.postOrderTraversal(postOrder, root.left);
      this.postOrderTraversal(postOrder, root.right);
      //   console.log(root.data);
      postOrder.push(root.data);
    }
  }

  inorderTraversal(inOrder, root = this.root) {
    if (root != null) {
      // L N R
      this.inorderTraversal(inOrder, root.left);
      inOrder.push(root.data);
      this.inorderTraversal(inOrder, root.right);
    }
  }

  findMinNode(root) {
    // Go as left and possible
    let currentNode = root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  deleteNode(val, root = this.root) {
    // Base case
    if (root == null) return null;

    // Either root is equal to val or not equal
    if (val != root.data) {
      if (val >= root.data) {
        // Go right and perform deletion
        root.right = this.deleteNode(val, root.right);
      } else {
        // Go left and perform deletion
        root.left = this.deleteNode(val, root.left);
      }
    } else {
      // Match found : val == root.data
      // Here we will deal with multiple cases
      // Case 1 :
      // root.left is null and root.right is null i.e leaf node
      if (root.left == null && root.right == null) {
        return null;
      }
      // Case 2 :
      // root.left is null but root.right is not null
      else if (root.left == null && root.right != null) {
        // Since root's right exists
        // After deletion of root right subtree of this root has to exist as it is
        // Thus preserve the right subtree
        let rightSubtree = root.right;
        return rightSubtree;
      }
      // Case 3 :
      // root.left is not null but root.right is null
      else if (root.left != null && root.right == null) {
        // Since root's left exists
        // After deletion of root left subtree of this root has to exist as it is
        // Thus preserve the left subtree
        let leftSubtree = root.left;
        return leftSubtree;
      }
      // Case 4 :
      // Both left and right of root are not null
      else {
        // Here we have two options
        // 1. Find the max in the left subtree and replace root with that
        // 2. Find the min in the right subtree and replace root with that
        // Let's work with 2
        let minNodeInRightSubtree = this.findMinNode(root.right);
        // Replace root with this node
        root.data = minNodeInRightSubtree.data;

        // Now delete the original minNodeInRightSubtree from it's original position
        root.right = this.deleteNode(minNodeInRightSubtree.data, root.right);
      }
    }

    return root;
  }

  isNodePresent(val, root = this.root) {
    if (root == null) return false;

    if (val == root.data) {
      return true;
    } else {
      // Not found
      let existsInLeftSubtree = false;
      let existsInRightSubtree = false;
      if (val > root.data) {
        // Search in right subtree
        existsInRightSubtree = this.isNodePresent(val, root.right);
      } else {
        // Search in left subtree
        existsInLeftSubtree = this.isNodePresent(val, root.left);
      }

      return existsInLeftSubtree || existsInRightSubtree;
    }
  }

  findNode(val, root = this.root) {
    // Base Case
    if (root == null) return null;

    if (val == root.data) {
      // Found
      return root;
    } else {
      // Not found
      let existsinLeft = null;
      let existsinRight = null;

      if (val > root.data) {
        // Search in right
        existsinRight = this.findNode(val, root.right);
      } else {
        // Search in left
        existsinLeft = this.findNode(val, root.left);
      }

      return existsinLeft || existsinRight;
    }
  }

  // Inorder of a bst with equal number of nodes
  // in left and right subtree
  constructBSTFromInorder(inorder, start, end) {
    // Base Case
    if (start > end) return null;

    let mid = Math.floor(start + (end - start) / 2);
    let rootNode = new Node(inorder[mid]);

    rootNode.left = this.constructBSTFromInorder(inorder, start, mid - 1);
    rootNode.right = this.constructBSTFromInorder(inorder, mid + 1, end);

    return rootNode;
  }
}

let Tree = new BinarySearchTree();
Tree.insert(5);
Tree.insert(3);
Tree.insert(9);
Tree.insert(1);
Tree.insert(2);
Tree.insert(4);
Tree.insert(7);
Tree.levelOrderTraversal();
let pre = [];
Tree.preOrderTraversal(pre);
console.log("DFS - Pre Order", pre);
let post = [];
Tree.postOrderTraversal(post);
console.log("DFS - Post Order", post);
let inOrder = [];
Tree.inorderTraversal(inOrder);
console.log("DFS - In Order", inOrder);
// Tree.deleteNode(3);
// console.log("After Tree.deleteNode(3)");
// Tree.levelOrderTraversal();
console.log(Tree.isNodePresent(2));
console.log(Tree.findNode(3));

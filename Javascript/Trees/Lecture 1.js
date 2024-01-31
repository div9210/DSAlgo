class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  // Function to insert a value into the binary tree
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      console.log(`Inserted ${value} as the root`);
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
        console.log(`Inserted ${newNode.value} as left child of ${node.value}`);
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
        console.log(
          `Inserted ${newNode.value} as right child of ${node.value}`
        );
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Pre-order traversal
  preOrderTraversal(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // In-order traversal
  inOrderTraversal(node = this.root) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Post-order traversal
  postOrderTraversal(node = this.root) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }

  // Level-order traversal (Breadth First Search)
  levelOrderTraversal() {
    let queue = [];
    let str = "";

    if (this.root) {
      queue.push(this.root);
      queue.push(null);
      while (queue.length > 0) {
        let node = queue.shift();
        if (!node) {
          // The current level is complete
          if (queue.length > 0) queue.push(null);
          str += "\n";
        } else {
          // console.log(node.value);
          str += node.value + " | ";
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
      }
    }

    return str;
  }
}

// // Example usage:
// const tree = new BinaryTree();
// console.log("Creating the tree...");
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(17);

// console.log("Pre-order traversal:");
// tree.preOrderTraversal();
// console.log("In-order traversal:");
// tree.inOrderTraversal();
// console.log("Post-order traversal:");
// tree.postOrderTraversal();
// console.log("Level-order traversal:");
// console.log(tree.levelOrderTraversal());

module.exports = {
  BinaryTree,
};

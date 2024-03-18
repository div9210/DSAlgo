class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Recursive insert function : void
  insert(val, root = this.root) {
    // if (!root) {
    //   this.root = new Node(val);
    // } else {
    // If root already exists
    // Then use recursion to find the vacant position
    this.root = this.RecursiveInsertFunction(root, val);
    // }
  }
  RecursiveInsertFunction(root, val) {
    if (root == null) {
      // This is the position to place the node
      let newNode = new Node(val);
      return newNode;
    }

    // if val is greater than the root data
    // then correct position will be right subtree
    if (val > root.data) {
      root.right = this.RecursiveInsertFunction(root.right, val);
    } else {
      // Left
      root.left = this.RecursiveInsertFunction(root.left, val);
    }

    return root;
  }

  searchNode(val, root = this.root) {
    if (root == null) {
      // Node not found
      return null;
    }

    if (root.data == val) {
      return root;
    }

    let right = null;
    let left = null;

    if (val > root.data) {
      // Go right and search with recursion
      right = this.searchNode(val, root.right);
    } else {
      // Go left and search with recursion
      left = this.searchNode(val, root.left);
    }

    // return left ya right
    return left || right;
  }

  isNodePresent(val, root = this.root) {
    if (root == null) {
      // Node not found
      return false;
    }

    if (root.data == val) {
      return true;
    }

    let right = false;
    let left = false;

    if (val > root.data) {
      // Go right and search with recursion
      right = this.isNodePresent(val, root.right);
    } else {
      // Go left and search with recursion
      left = this.isNodePresent(val, root.left);
    }

    // return left ya right
    return left || right;
  }

  getRoot() {
    return this.root;
  }

  preorderTraversal(root = this.root) {
    if (root) {
      // N L R
      console.log(root.data);
      this.preorderTraversal(root.left);
      this.preorderTraversal(root.right);
    }
  }

  inorderTraversal(result, root = this.root) {
    if (root) {
      // L N R
      this.inorderTraversal(result, root.left);
      result.push(root.data);
      this.inorderTraversal(result, root.right);
    }
  }

  levelOrderTraverasal(root, result) {
    // Iterative BFS
    let q = [];
    q.push(root);

    while (q.length > 0) {
      // Extraction of front element
      let front = q.shift();
      // Process front element
      result.push(front.data);

      // Push children if exists
      if (front.left) q.push(front.left);

      if (front.right) q.push(front.right);
    }
  }

  levelOrderPrint(root) {
    let str = "";
    let q = [];

    // Push root and null in queue
    q.push(root);
    q.push(null);

    while (q.length > 0) {
      let front = q.shift();
      if (front == null) {
        // Level Complete
        str += "\n";
        if (q.length > 0) q.push(null);
      } else {
        // Process
        str += "|" + front.data + "|";

        // Push children if exists
        if (front.left) q.push(front.left);

        if (front.right) q.push(front.right);
      }
    }

    console.log(str);
  }
}

var zigzagLevelOrder = function (root) {
  // Level order traversal
  let currentLevel = 0;
  let levelNodesMap = new Map();
  let leftToRight = true;

  let q = [];
  q.push(root);
  q.push(null);

  while (q.length > 0) {
    // Extract front node
    let front = q.shift();

    // If front is null that means level is completed
    if (front == null) {
      // level complete
      if (q.length > 0) q.push(null);

      leftToRight = !leftToRight;
    } else {
      // Process

      // Push children if exists
      if (front.left) q.push(front.left);
      if (front.right) q.push(front.right);
    }
  }

  return [...levelNodesMap.values()];
};

let TreeN = new Tree();
TreeN.insert(5);
TreeN.insert(3);
TreeN.insert(1);
TreeN.insert(4);
TreeN.insert(7);
TreeN.insert(9);
TreeN.insert(6);
TreeN.insert(8);
// let foundNode = TreeN.searchNode(6);
// let foundNodePresent = TreeN.isNodePresent(6);
// console.log("foundNode", foundNode);
// console.log("foundNodePresent", foundNodePresent);
// let inorderResult = [];
// TreeN.inorderTraversal(inorderResult);
// console.log("inorderResult", inorderResult);
// let LevelOrderResult = [];
// TreeN.levelOrderTraverasal(TreeN.getRoot(), LevelOrderResult);
// console.log("LevelOrderResult", LevelOrderResult);
TreeN.levelOrderPrint(TreeN.getRoot());
let zigzag = zigzagLevelOrder(TreeN.getRoot());
console.log("zigzag", zigzag);

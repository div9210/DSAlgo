// Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    // Create a new node with the value
    let newNode = new Node(value);
    // If tree is empty
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right != null) currentNode = currentNode.right;
          else {
            currentNode.right = newNode;
            break;
          }
        } else {
          // value is either smaller or equal to the currentNode
          if (currentNode.left != null) currentNode = currentNode.left;
          else {
            currentNode.left = newNode;
            break;
          }
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value == currentNode.value) {
          return currentNode;
        } else {
          if (value > currentNode.value) {
            if (currentNode.right != null) {
              currentNode = currentNode.right;
            } else {
              return null;
            }
          } else {
            // value is less than the value
            if (currentNode.left != null) currentNode = currentNode.left;
            else {
              return null;
            }
          }
        }
      }
    }
  }

  remove(value) {}
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(7);
tree.insert(9);
tree.insert(2);
tree.insert(3);
tree.insert(1);

console.log(JSON.stringify(tree));

console.log("tree.lookup(3)", tree.lookup(100));

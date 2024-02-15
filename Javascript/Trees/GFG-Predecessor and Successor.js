class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  successor(root, pre, suc, key) {
    let curr = root;

    while (curr) {
      if (curr.key > key) {
        suc = curr;
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }

  predecessor(root, pre, suc, key) {
    let curr = root;
    while (curr) {
      if (curr.key < key) {
        pre = curr;
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
  }

  findPreSuc(root, pre, suc, key) {
    this.successor(root, pre, suc, key);
    this.predecessor(root, pre, suc, key);
  }
}

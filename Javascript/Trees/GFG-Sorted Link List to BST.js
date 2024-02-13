class Solution {
  sortedListToBST(head) {
    let n = 0;
    let temp = head;
    while (temp != null) {
      n++;
      temp = temp.next;
    }

    let headRes = { head: head }; // Corrected initialization

    let root = this.solve(headRes, n);
    return root;
  }

  solve(headRes, n) {
    if (headRes.head == null || n <= 0) return null;

    // LNR

    // L
    let leftSubTree = this.solve(headRes, Math.floor(n / 2));

    // N
    let root = headRes.head;
    root.left = leftSubTree;
    headRes.head = headRes.head.next;

    // R
    let rightSubTree = this.solve(headRes, n - 1 - Math.floor(n / 2));
    root.right = rightSubTree;

    return root;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getHead() {
    return this.head;
  }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);

let sol = new Solution();
let root = sol.sortedListToBST(dll.getHead());
console.log("root", root);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a node at the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  getHead() {
    return this.head;
  }
}

// Creating LinkedList L1
let L1 = new LinkedList();
L1.append(9);
L1.append(6);
L1.append(4);
L1.append(2);
L1.append(3);
L1.append(8);

// Creating LinkedList L2
let L2 = new LinkedList();
L2.append(1);
L2.append(2);
L2.append(8);
L2.append(6);
L2.append(2);

class Solution {
  makeUnion(head1, head2) {
    let map = new Map();
    let t1 = head1;
    while (t1) {
      map.set(t1.data, t1);
      t1 = t1.next;
    }
    let t2 = head2;
    while (t2) {
      map.set(t2.data, t2);
      t2 = t2.next;
    }

    let sortedEntries = [...map.entries()].sort((a, b) => a[0] - b[0]);

    let firstNode = sortedEntries[0][1];
    let temp = firstNode;
    for (let i = 1; i < sortedEntries.length; i++) {
      let currNode = sortedEntries[i][1];
      temp.next = currNode;
      temp = temp.next;
    }
    temp.next = null;
    return firstNode;
  }
}

let sol = new Solution();
let result = sol.makeUnion(L1.getHead(), L2.getHead());

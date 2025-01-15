class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}

class LinkedListWithBottom {
  constructor() {
    this.head = null;
  }
  appendAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  appendAtBottomTailOfPositionNode(position, data) {
    let newNode = new Node(data);
    let positionNode = this.head;
    let currentPos = 1;
    while (currentPos != position) {
      positionNode = positionNode.next;
      currentPos++;
    }
    let temp = positionNode;
    while (temp.bottom != null) {
      temp = temp.bottom;
    }
    temp.bottom = newNode;
  }

  getHead() {
    return this.head;
  }
}
class Solution {
  merge(a, b) {
    if (a == null) return b;
    if (b == null) return a;

    let ans = null;
    if (a.data < b.data) {
      ans = a;
      a.bottom = merge(a.bottom, b);
    } else {
      ans = b;
      b.bottom = merge(b.bottom, a);
    }

    return ans;
  }
  // 2->4->6->8
  flatten(head) {
    // Base Case
    if (head == null) {
      return head;
    }

    let mergedLL = merge(head, this.flatten(head.next));
    return mergedLL;
  }
}

const testLL = new LinkedListWithBottom();
testLL.appendAtHead(28);
testLL.appendAtHead(19);
testLL.appendAtHead(10);
testLL.appendAtHead(5);

// Pos 1 bottom
testLL.appendAtBottomTailOfPositionNode(1, 7);
testLL.appendAtBottomTailOfPositionNode(1, 8);
testLL.appendAtBottomTailOfPositionNode(1, 30);

// Pos 2 bottom
testLL.appendAtBottomTailOfPositionNode(2, 20);

// Pos 3 bottom
testLL.appendAtBottomTailOfPositionNode(3, 22);
testLL.appendAtBottomTailOfPositionNode(3, 50);

let sol = new Solution();
sol.flatten(testLL.getHead());

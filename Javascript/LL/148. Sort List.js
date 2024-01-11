const { mergeTwoLists } = require("./21. Merge Two Sorted Lists");
const { middleNode } = require("./876. Middle of the Linked List");
const { LinkedList } = require("./Lecture 1");

var sortList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  // Else break
  let midNode = middleNode(head);
  // Left part
  let left = head;
  let right = midNode.next;
  midNode.next = null;

  // Recursive calls
  left = sortList(left);
  right = sortList(right);

  // Merge left and right
  let mergedList = mergeTwoLists(left, right);
  return mergedList;
};

const unsortedLL = new LinkedList();
unsortedLL.addAtTail(4);
unsortedLL.addAtTail(2);
unsortedLL.addAtTail(1);
unsortedLL.addAtTail(3);

console.log(sortList(unsortedLL.getHead()));

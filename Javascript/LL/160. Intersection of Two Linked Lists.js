let { LinkedList } = require("./Lecture 1");

var getIntersectionNode = function (headA, headB) {
  let i = headA;
  let j = headB;

  while (i.next != null && j.next != null) {
    i = i.next;
    j = j.next;
  }

  // When the above loop ended one of them has reached the last node
  // Then increase the other by the difference node and iterate again
  let newi = headA;
  let newj = headB;
  let counter = 0;
  // Both reached end node together
  if (i.next == null && j.next == null) {
    newi = headA;
    newj = headB;
  } else if (i.next == null) {
    // Count remaining nodes from j to i
    while (j != i) {
      if (i && j) {
        counter++;
        j = j.next;
      } else {
        return null;
      }
    }
    // Increase i by counter nodes
    while (counter) {
      newj = newj.next;
      counter--;
    }
  } else {
    // Count remaining nodes from i to j
    while (i != j) {
      if (i && j) {
        counter++;
        i = i.next;
      } else {
        return null;
      }
    }
    // Increase j by counter nodes
    while (counter) {
      newi = newi.next;
      counter--;
    }
  }

  // Iterate from newi and newj
  while (newi && newj && newi != newj) {
    newi = newi.next;
    newj = newj.next;
  }

  return newi;
};

let LL1 = new LinkedList();
let LL2 = new LinkedList();
LL1.addAtTail(4);
LL1.addAtTail(1);
LL1.addAtTail(8);
let intersectNode = LL1.getTail();
LL1.addAtTail(4);
LL1.addAtTail(5);

LL2.addAtTail(5);
LL2.addAtTail(6);
LL2.addAtTail(1);
LL2.intersect(intersectNode);
LL2.addAtTail(4);
LL2.addAtTail(5);

getIntersectionNode(LL1.getHead(), LL2.getHead());

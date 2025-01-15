function findPrevToTail(head) {
  let temp = head;
  let length = 0;
  while (temp && temp.next && temp.next.next != null) {
    length++;
    temp = temp.next;
  }

  let prevToTail = temp;

  while (temp != null) {
    length++;
    temp = temp.next;
  }

  return { prevToTail, length };
}
var rotateRight = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }

  let len = findPrevToTail(head).length;
  k = k % len;

  while (k) {
    let prevToTail = findPrevToTail(head).prevToTail;
    prevToTail.next.next = head;
    head = prevToTail.next;
    prevToTail.next = null;
    k--;
  }

  return head;
};

// Alternate Method

function length(head) {
  let temp = head;
  let len = 0;
  let tailNode = null;
  while (temp != null) {
    if (temp.next == null) {
      tailNode = temp;
    }
    len++;
    temp = temp.next;
  }

  return { len, tailNode };
}

var rotateRight = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }

  let { len, tailNode } = length(head);
  k = k % len;

  let currPos = 1;
  // Here length - k is the last node the after the k rotation.
  // Draw for understanding
  let currNode = head;
  while (currPos != len - k && currNode) {
    currNode = currNode.next;
    currPos++;
  }

  if (currNode) {
    tailNode.next = head;
    head = currNode.next;
    currNode.next = null;
  }

  return head;
};

let LL = new LinkedList();
LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

rotateRight(LL.getHead(), 2);

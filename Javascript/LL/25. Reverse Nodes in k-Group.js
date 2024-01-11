function getLength(head) {
  let temp = head;
  let len = 0;
  while (temp != null) {
    temp = temp.next;
    len++;
  }

  return len;
}
var reverseKGroup = function (head, k) {
  // Base Case
  if (head.next == null || head == null) {
    return head;
  }
  let length = getLength(head);
  if (length < k) {
    return head;
  }

  // Solve 1 case
  let prevNode = null;
  let currentNode = head;
  let currentPosition = 1;
  let nextNode = currentNode.next;
  while (currentNode != null && currentPosition <= k) {
    nextNode = currentNode.next;

    // Change the currentNode next to prev (reverse)
    currentNode.next = prevNode;

    // Change all the nodes for the next iteration
    prevNode = currentNode;
    currentNode = nextNode;
    currentPosition++;
  }

  // Recursive Call
  if (nextNode != null) {
    let recursiveList = reverseKGroup(nextNode, k);
    head.next = recursiveList;
  }
  return prevNode;
};

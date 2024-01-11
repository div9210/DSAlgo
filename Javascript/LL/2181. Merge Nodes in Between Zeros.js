var mergeNodes = function (head) {
  if (head == null) {
    return head;
  }

  // find first non zero node
  let temp = head;
  while (temp != null && temp.val == 0) {
    temp = temp.next;
  }

  // Now temp is at the first non zero node
  // Starting the algorithm
  let newHead = temp;
  while (temp && temp.next) {
    if (temp.next.val != 0) {
      temp.val = temp.val + temp.next.val;
      temp.next = temp.next.next;
    } else if (temp.val == 0) {
      temp = temp.next;
    } else {
      temp.next = temp.next.next;
      temp = temp.next;
    }
  }

  return newHead;
};

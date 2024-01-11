var mergeTwoLists = function (list1, list2) {
  let left = list1;
  let right = list2;
  let leftToHead = new ListNode(-1);
  let fillPtr = leftToHead;

  while (left != null && right != null) {
    if (left.val <= right.val) {
      fillPtr.next = left;
      fillPtr = left;
      left = left.next;
    } else {
      fillPtr.next = right;
      fillPtr = right;
      right = right.next;
    }
  }

  // if left is remaining
  while (left != null) {
    fillPtr.next = left;
    fillPtr = left;
    left = left.next;
  }

  // if right is remaining
  while (right != null) {
    fillPtr.next = right;
    fillPtr = right;
    right = right.next;
  }

  return leftToHead.next;
};

module.exports = {
  mergeTwoLists,
};

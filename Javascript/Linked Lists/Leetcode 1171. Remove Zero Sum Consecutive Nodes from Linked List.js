function sanitizeMap(it, currSum, sumNodeMap) {
  let cSum = currSum;

  while (true) {
    cSum += it.val;
    if (cSum == currSum) {
      return;
    }
    // Find the cSum in map and remove it
    sumNodeMap.delete(cSum);
    it = it.next;
  }
}
var removeZeroSumSublists = function (head) {
  if (head == null) return head;
  let sumNodeMap = new Map();
  let iterator = head;
  let currSum = 0;
  while (iterator) {
    currSum += iterator.val;
    if (sumNodeMap.has(currSum)) {
      // That means this sum is already present in the map
      // And against the sum, there is a node
      // Which further means after that node in map everything else was summed to zero
      sanitizeMap(iterator.next, currSum, sumNodeMap);
      let prevNode = sumNodeMap.get(currSum);
      prevNode.next = iterator.next;
    } else if (currSum == 0) {
      sumNodeMap.clear();
      head = iterator.next;
    } else {
      sumNodeMap.set(currSum, iterator);
    }

    iterator = iterator.next;
  }

  return head;
};

const { MinHeapWithComp } = require("./MinHeap with Comparator");

var mergeKLists = function (lists) {
  let minHeap = new MinHeapWithComp((a, b) => a.val - b.val);
  let head = null;
  let tail = null;
  // Process first k nodes (first from each lists) into a minHeap
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      minHeap.insert(lists[i]);
    }
  }

  while (minHeap.size() != 0) {
    let topNode = minHeap.peek();
    minHeap.extractMin();
    if (!head) {
      head = topNode;
      tail = topNode;

      // Push next node (if present)
      if (topNode.next) {
        minHeap.insert(topNode.next);
      }
    } else {
      tail.next = topNode;
      tail = tail.next;

      // Push topNode.next into minHeap
      if (topNode?.next) {
        minHeap.insert(topNode.next);
      }
    }
  }

  return head;
};
let head1 = { val: 2, next: { val: 4, next: { val: 6, next: null } } };
let head2 = { val: 1, next: { val: 3, next: { val: 5, next: null } } };

let input = [head1, head2];
let result = mergeKLists(input);

console.log("result", result);

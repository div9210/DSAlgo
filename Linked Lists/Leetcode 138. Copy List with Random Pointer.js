function solve(head, map) {
  if (head == null) {
    return head;
  }

  let copyNode = new Node(head.val);
  map.set(head, copyNode);
  copyNode.next = solve(head.next, map);

  if (head.random != null) {
    copyNode.random = map.get(head.random);
  }

  return copyNode;
}

function solve2(head) {}

var copyRandomList = function (head) {
  let nodeToNodeMap = new Map();
  // Traverse from left to right and store each node as a key
  // And a new node with same data as value
  return solve(head, nodeToNodeMap);
};

// Alternate Method 2

var copyRandomList = function (head) {
  // Let us store LL in this fashion
  // node1 -> copyNode1 -> node2 -> copyNode2 -> null
  let temp = head;
  while (temp != null) {
    let copyNode = new Node(temp.val);
    let nextNode = temp.next;
    temp.next = copyNode;
    copyNode.next = nextNode;
    temp = nextNode;
  }

  // Now traverse again from left to right
  // Moving temp pointer +2 steps skipping the copyNode each time
  temp = head;
  while (temp != null) {
    if (temp.random) {
      temp.next.random = temp.random.next;
    }
    temp = temp.next.next;
  }

  // Seperating old LL and new LL
  let oldHead = head;
  let head2 = head.next;
  let tempNewHead = head2;
  while (oldHead && tempNewHead) {
    oldHead.next = oldHead.next.next;
    if (tempNewHead.next) {
      tempNewHead.next = tempNewHead.next.next;
    }
  }

  return head2;
};

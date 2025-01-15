// My approach which misbehaves with the input list Lol.
var hasCycle = function (head) {
  let faltuKaNode = new ListNode(1);

  let currentNode = head;
  while (currentNode != null) {
    if (currentNode.next == faltuKaNode) {
      return true;
    }
    let prevNode = currentNode;
    currentNode = currentNode.next;
    prevNode.next = faltuKaNode;
  }

  return false;
};

// Alternate approach is to use a map where key = node and value = true
var hasCycle = function (head) {
  let map = new Map();
  let currentNode = head;
  while (currentNode != null) {
    if (map.has(currentNode)) {
      return true;
    } else {
      map.set(currentNode, true);
    }

    currentNode = currentNode.next;
  }

  return false;
};

// Alternate approach is to use rabbit and tortoise algorithm and wait for
// tortoise to catch the rabbit which is only possible if rabbit runs in loop
var hasCycle = function (head) {
  let rabbit = head;
  let tortoise = head;

  while (rabbit?.next?.next) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (rabbit == tortoise) {
      return true;
    }
  }

  return false;
};

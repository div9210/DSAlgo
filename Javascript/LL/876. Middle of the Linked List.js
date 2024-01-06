var middleNode = function (head) {
  // Find length of the linked list
  let currentNode = head;
  let length = 0;
  while (currentNode != null) {
    length++;
  }

  let mid = Math.floor(n / 2) + 1;
  currentNode = head;
  let reachedPosition = 1;
  while (reachedPosition != mid) {
    currentNode = currentNode.next;
    reachedPosition++;
  }

  return currentNode;
};

var middleNode = function (head) {
  // Solving it by rabbit tortoise algorithm
  // i.e rabit moves 2 steps and if it successfully moves 2 steps then tortoise moves 1
  let rabbit = head;
  let tortoise = head;
  while (rabbit?.next?.next) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
  }

  // If code reaches here that means rabbit cannnot move 2 steps
  // As there are not enough steps
  if (rabbit?.next) {
    return tortoise.next;
  } else {
    return tortoise;
  }
};

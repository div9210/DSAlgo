var reverseList = function (head) {
  if (head == null) {
    console.log("Empty LL");
  } else {
    let prevNode = null;
    let currentNode = head;
    let nextNode = currentNode.next;
    while (currentNode != null) {
      currentNode.next = prevNode;

      // Change the values
      prevNode = currentNode;
      currentNode = nextNode;
      // Update the nextNode if currentNode is not null
      if (currentNode != null) {
        nextNode = currentNode.next;
      }
    }
    head = prevNode;
  }

  return head;
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
  //   if (rabbit?.next) {
  //     return tortoise.next;
  //   } else {
  //     return tortoise;
  //   }

  return tortoise;
};

var isPalindrome = function (head) {
  let midNode = middleNode(head);
  let head2 = midNode.next;
  midNode.next = null;

  // Reverse the LL2
  head2 = reverseList(head2);

  let currNode1 = head;
  let currNode2 = head2;

  while (currNode1 != null && currNode2 != null) {
    if (currNode1.val != currNode2.val) {
      return false;
    }
    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
  }

  return true;
};

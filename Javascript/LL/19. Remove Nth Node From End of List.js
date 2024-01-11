const { newLL } = require("./Lecture 1");

function getLength(head) {
  let temp = head;
  let length = 0;
  while (temp != null) {
    temp = temp.next;
    length++;
  }

  return length;
}
var removeNthFromEnd = function (head, n) {
  let length = getLength(head);

  let desiredPosition = length - n - 1;

  if (desiredPosition < 0) {
    head = head.next;
  } else if (desiredPosition == 0) {
    head.next = head.next.next;
  } else {
    let temp = head;
    let currPos = 0;
    while (currPos != desiredPosition) {
      temp = temp.next;
      currPos++;
    }

    temp.next = temp.next.next;
  }

  return head;
};

removeNthFromEnd(newLL.getHead(), 2);

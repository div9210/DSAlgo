let { LinkedList } = require("./Lecture 1");

var oddEvenList = function (head) {
  if (head == null) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  while ((odd && odd.next) || (even && even.next)) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

let LL = new LinkedList();
LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);

oddEvenList(LL.getHead());

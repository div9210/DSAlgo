function solve(head, carryObj) {
  // Base Case
  if (head == null) {
    return;
  }

  // Recursively reaching at the end
  solve(head.next, carryObj);

  // Processing (Considering the last node)
  let prod = head.val * 2 + carryObj.carry;
  let digit = prod % 10;
  head.val = digit;
  carryObj.carry = Math.floor(prod / 10);
}

var doubleIt = function (head) {
  let carryObj = { carry: 0 };
  solve(head, carryObj);
  if (carryObj.carry != 0) {
    // Insert carry at head
    let carryNode = new ListNode(carryObj.carry);
    carryNode.next = head;
    head = carryNode;
  }

  return head;
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  findIntersection(head1, head2) {
    let mapLL2 = new Map();
    let temp = head2;
    while (temp) {
      mapLL2.set(temp.data, temp);
      temp = temp.next;
    }

    // Check if any node in LL1 exists in LL2
    let dummyNode = new Node(-1);
    let tempForDummy = dummyNode;
    temp = head1;
    while (temp) {
      if (mapLL2.get(temp.data)) {
        tempForDummy.next = mapLL2.get(temp.data);
        tempForDummy = tempForDummy.next;
      }
      temp = temp.next;
    }

    return dummyNode.next;
  }
}

let head1 = {
  data: 4,
  next: { data: 2, next: { data: 1, next: null } },
};

let head2 = {
  data: 3,
  next: { data: 2, next: { data: 1, next: null } },
};

let sol = new Solution();
let result = sol.findIntersection(head1, head2);

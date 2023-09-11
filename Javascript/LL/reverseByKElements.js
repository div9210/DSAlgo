class Solution {
  /* Should do this in-place without altering the nodes' values.*/
  count = 0;
  reverse(node, k) {
    while (node.next != null) {
      let firstNode = null;
      if (head == node) {
        firstNode = node;
        node = node.next;
      } else {
        let nextNode = node.next;
      }
    }
  }
}

//  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// & k = 3
// Answer : 3 -> 2 -> 1 -> 6 -> 5 -> 4

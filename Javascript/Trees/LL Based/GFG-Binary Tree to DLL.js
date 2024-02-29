class Solution {
  //Function to convert a binary tree to doubly linked list and return it.
  solve(root, headR) {
    if (root == null) return;

    // RNL

    // R
    this.solve(root.right, headR);

    // N
    root.right = headR.head;
    if (headR.head) headR.head.left = root;
    headR.head = root;

    // L
    this.solve(root.left, headR);
  }
  bToDLL(root) {
    let headR = { head: null };
    this.solve(root, headR);
    return headR.head;
  }
}

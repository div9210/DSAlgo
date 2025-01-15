const { checkIfFollowsHeapProperty } = require("./CBT is a valid heap");

var isCompleteTree = function (root) {
  if (root == null) return true;
  let nullFound = false;
  let q = [];
  q.push(root);
  while (q.length != 0) {
    let front = q.shift();

    // Check for left and right children
    if (front != null) {
      if (nullFound) {
        // If code is here that means something is non null
        // And nullFound indicates that we previously found a null
        return false;
      }
      q.push(front.left);
      q.push(front.right);
    } else {
      nullFound = true;
    }
  }

  return true;
};

class Solution {
  isHeap(root) {
    // If CBT + Follows Heap
    let followsHeap = checkIfFollowsHeapProperty(root);
    let isComplete = isCompleteTree(root);

    return followsHeap.isHeap && isComplete;
  }
}

module.exports = {
  isCompleteTree,
};

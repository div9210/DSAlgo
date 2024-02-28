function checkIfFollowsHeapProperty(root) {
  if (root == null) {
    return {
      maxVal: Number.MIN_SAFE_INTEGER,
      isHeap: true,
    };
  }

  // Leaf Node
  if (root.left == null && root.right == null) {
    return {
      maxVal: root.data,
      isHeap: true,
    };
  }

  // Check for left and right
  let leftAns = checkIfFollowsHeapProperty(root.left);
  let rightAns = checkIfFollowsHeapProperty(root.right);

  if (
    root.data >= leftAns.maxVal &&
    root.data >= rightAns.maxVal &&
    leftAns.isHeap &&
    rightAns.isHeap
  ) {
    return {
      maxVal: root.data,
      isHeap: true,
    };
  } else {
    return {
      maxVal: Math.max(root.data, leftAns.maxVal, rightAns.maxVal),
      isHeap: false,
    };
  }
}

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

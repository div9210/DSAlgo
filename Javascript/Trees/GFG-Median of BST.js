class Solution {
  morrisForCount(root) {
    // let ans = [];
    let count = 0;
    let curr = root;
    while (curr) {
      if (curr.left == null) {
        // Visit the node
        // ans.push(curr.val);
        count++;
        // Go to right
        curr = curr.right;
      } else {
        // curr node -> left is not null
        // Find the predecessor
        let pred = curr.left;
        while (pred.right && pred.right != curr) {
          pred = pred.right;
        }
        // Loop can break due to 2 conditions
        // 1. There is no pred -> right
        if (!pred.right) {
          // Establish a connection
          pred.right = curr;
          // Continue inorder
          curr = curr.left;
        }
        // 2. pred.right is back to curr, i.e pred connection already established
        else {
          // Destroy the connection
          pred.right = null;
          // visit the node
          //   ans.push(curr.val);
          count++;
          // Go always right after visiting the node (L N R)
          curr = curr.right;
        }
      }
    }

    return count;
  }

  Median(root, n) {
    // let ans = [];
    let i = 0;
    let oddTerm = Math.floor((n + 1) / 2);
    let oddTermVal = -1;

    let evenTerm1 = Math.floor(n / 2);
    let evenTerm1Val = -1;

    let evenTerm2 = Math.floor(n / 2 + 1);
    let evenTerm2Val = -1;
    let curr = root;
    while (curr) {
      if (curr.left == null) {
        // Visit the node
        // ans.push(curr.val);
        i++;
        if (i == oddTerm) oddTermVal = curr.data;
        if (i == evenTerm1) evenTerm1Val = curr.data;
        if (i == evenTerm2) evenTerm2Val = curr.data;
        // Go to right
        curr = curr.right;
      } else {
        // curr node -> left is not null
        // Find the predecessor
        let pred = curr.left;
        while (pred.right && pred.right != curr) {
          pred = pred.right;
        }
        // Loop can break due to 2 conditions
        // 1. There is no pred -> right
        if (!pred.right) {
          // Establish a connection
          pred.right = curr;
          // Continue inorder
          curr = curr.left;
        }
        // 2. pred.right is back to curr, i.e pred connection already established
        else {
          // Destroy the connection
          pred.right = null;
          // visit the node
          //   ans.push(curr.val);
          i++;
          if (i == oddTerm) oddTermVal = curr.data;
          if (i == evenTerm1) evenTerm1Val = curr.data;
          if (i == evenTerm2) evenTerm2Val = curr.data;
          // Go always right after visiting the node (L N R)
          curr = curr.right;
        }
      }
    }

    // If had even Terms
    let median = 0.0;
    if ((n & 1) != 0) {
      // odd
      median = oddTermVal;
    } else {
      median = (evenTerm1Val + evenTerm2Val) / 2;
    }

    return median;
  }
  findMedian(root) {
    let n = this.morrisForCount(root);

    let median = this.Median(root, n);
    return median;
  }
}

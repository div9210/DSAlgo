class Solution {
  inorder(root, arr) {
    if (root != null) {
      // LNR
      this.inorder(root.left, arr);
      arr.push(root.data);
      this.inorder(root.right, arr);
    }
  }
  reverseinorder(root, inR) {
    if (root != null) {
      // RNL
      this.reverseinorder(root.right, inR);
      inR.push(root.data);
      this.reverseinorder(root.left, inR);
    }
  }
  countPairs(root1, root2, x) {
    let inorder1 = [];
    let reverseInorder2 = [];
    this.inorder(root1, inorder1);
    this.reverseinorder(root2, reverseInorder2);

    // console.log("inorder1", inorder1)
    // console.log("inorder2", reverseInorder2)

    let i = 0;
    let j = 0;
    let count = 0;
    while (i < inorder1.length && j < reverseInorder2.length) {
      let sum = inorder1[i] + reverseInorder2[j];
      if (sum > x) {
        j++;
      } else if (sum < x) {
        i++;
      } else {
        count++;
        i++;
        j++;
      }
    }

    return count;
  }
}

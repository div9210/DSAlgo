const { BinaryTree } = require("../Lecture 1");

// function height(root) {
//   let queue = [];
//   let height = 0;
//   if (root) {
//     queue.push(root);
//     queue.push(null);
//     while (queue.length > 0) {
//       // Remove the currentNode from queue
//       let currNode = queue.shift();
//       if (!currNode) {
//         // that means level complete
//         height++;
//         if (queue.length > 0) queue.push(null);
//       } else {
//         // Put left and right of the currNode into queue
//         if (currNode.left) queue.push(currNode.left);
//         if (currNode.right) queue.push(currNode.right);
//       }
//     }
//   }

//   return height;
// }

// var diameterOfBinaryTree = function (root) {
//   if (!root) {
//     return 0;
//   }

//   let option1 = diameterOfBinaryTree(root.left);
//   let option2 = diameterOfBinaryTree(root.right);

//   let option3 = height(root.left) + height(root.right);
//   return Math.max(option1, option2, option3);
// };

// Faster way
function heightUsingRecursion(root, ans) {
  if (root == null) return 0;

  let lh = heightUsingRecursion(root.left, ans);
  let rh = heightUsingRecursion(root.right, ans);

  // Extra piece of code in height function
  let currD = lh + rh;
  ans.d = Math.max(ans.d, currD);
  //////////////////////////////////////////

  return Math.max(lh, rh) + 1;
}

var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  let ans = {
    d: 0,
  };
  heightUsingRecursion(root, ans);
  return ans.d;
};

let Tree = new BinaryTree();
Tree.insert(2);
Tree.insert(1);

console.log(diameterOfBinaryTree(Tree.getRoot()));

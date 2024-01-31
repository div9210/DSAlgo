var maxDepth = function (root) {
  let queue = [];
  let height = 0;
  if (root) {
    queue.push(root);
    queue.push(null);
    while (queue.length > 0) {
      // Remove the currentNode from queue
      let currNode = queue.shift();
      if (!currNode) {
        // that means level complete
        height++;
        if (queue.length > 0) queue.push(null);
      } else {
        // Put left and right of the currNode into queue
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }
    }
  }

  return height;
};

exports.height = maxDepth;

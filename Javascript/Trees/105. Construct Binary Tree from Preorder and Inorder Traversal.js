class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildFromPreAndIn(preorder, inorder, pre, inStart, inEnd, inOrderMap) {
  // Base Cases
  if (pre.index > preorder.length || inStart > inEnd) {
    return null;
  }

  // Extract the val for which we will create currNode from preOrder
  let val = preorder[pre.index];

  // Find the position of val in inorder
  // Either linear search val in the inorder array
  // Either Binary search val in the inorder array
  // Since we have to find from inorder again and again
  // We can save inorder in a map to later find it in O(1)
  let pos = inOrderMap.get(val);

  // Make a node from the value of val
  let currNode = new Node(val);

  pre.index++;

  // Left inStart -> pos - 1
  currNode.left = buildFromPreAndIn(
    preorder,
    inorder,
    pre,
    inStart,
    pos - 1,
    inOrderMap
  );

  // Right pos + 1 -> inEnd
  currNode.right = buildFromPreAndIn(
    preorder,
    inorder,
    pre,
    pos + 1,
    inEnd,
    inOrderMap
  );

  return currNode;
}

var buildTree = function (preorder, inorder) {
  let inOrderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inOrderMap.set(inorder[i], i);
  }

  // By Reference
  let pre = {
    index: 0,
  };

  let inStart = 0;
  let inEnd = inorder.length - 1;
  let root = buildFromPreAndIn(
    preorder,
    inorder,
    pre,
    inStart,
    inEnd,
    inOrderMap
  );
  return root;
};

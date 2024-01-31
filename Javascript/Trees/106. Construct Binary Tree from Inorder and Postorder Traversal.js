class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructTreeFromPostIn(postorder, postI, inorderMap, inStart, inEnd) {
  // Base Cases
  if (postI.index < 0 || inStart > inEnd) {
    return null;
  }

  let val = postorder[postI.index];
  postI.index--;

  // Create a new Node with val
  let currNode = new Node(val);
  // Find the position of val in inorderMap
  let pos = inorderMap.get(val);

  // Solve for Right Subtree FIRST
  currNode.right = constructTreeFromPostIn(
    postorder,
    postI,
    inorderMap,
    pos + 1,
    inEnd
  );

  // Solve for Left Subtree
  currNode.left = constructTreeFromPostIn(
    postorder,
    postI,
    inorderMap,
    inStart,
    pos - 1
  );

  return currNode; // root
}

var buildTree = function (inorder, postorder) {
  // create a map from inorder for better search
  let inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let inStart = 0;
  let inEnd = inorder.length - 1;
  let postI = {
    index: postorder.length - 1,
  };

  let root = constructTreeFromPostIn(
    postorder,
    postI,
    inorderMap,
    inStart,
    inEnd
  );
  return root;
};

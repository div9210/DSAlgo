function inorderT(root, inorder) {
  if (root != null) {
    // LNR
    inorderT(root.left, inorder);
    inorder.push(root.val);
    inorderT(root.right, inorder);
  }
}

function buildTreeFromInorder(inorder, s, e) {
  if (s > e) {
    return null;
  }

  let mid = Math.floor(s + (e - s) / 2);
  // Create a root node with mid element
  let root = new Node(inorder[mid]);

  root.left = buildTreeFromInorder(inorder, s, mid - 1);
  root.right = buildTreeFromInorder(inorder, mid + 1, e);

  return root;
}

var balanceBST = function (root) {
  let inorder = [];
  inorderT(root, inorder);
  let start = 0;
  let end = inorder.length - 1;
  let rootBalanced = buildTreeFromInorder(inorder, start, end);
  return rootBalanced;
};

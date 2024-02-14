function PreorderT(root, preorder) {
  if (root != null) {
    // N L R
    preorder.push(root);
    PreorderT(root.left, preorder);
    PreorderT(root.right, preorder);
  }
}
var flatten = function (root) {
  let preorder = [];
  PreorderT(root, preorder);
  let curr = 0;
  while (curr < preorder.length) {
    let next = curr + 1;
    preorder[curr].right = preorder[next] || null;
    preorder[curr].left = null;
    curr++;
  }

  return preorder[0];
};

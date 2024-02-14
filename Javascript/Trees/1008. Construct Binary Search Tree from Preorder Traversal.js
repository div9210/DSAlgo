function buildTree(preorder, indexRef, min, max) {
  if (indexRef.i >= preorder.length) return;
  let val = preorder[indexRef.i];
  if (val >= max || val <= min) return;

  let root = new Node(val);
  indexRef.i++;
  root.left = buildTree(preorder, indexRef, min, val);
  root.right = buildTree(preorder, indexRef, val, max);

  return root;
}

var bstFromPreorder = function (preorder) {
  let indexRef = {
    i: 0,
  };
  let min = -Infinity;
  let max = Infinity;
  let root = buildTree(preorder, indexRef, min, max);
  return root;
};

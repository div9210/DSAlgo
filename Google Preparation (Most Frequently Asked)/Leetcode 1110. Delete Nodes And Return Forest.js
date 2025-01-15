/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    let setD = new Set(to_delete);
    let forest = [];
    preOrder(root, true);
    return forest;

    function preOrder(node, isRoot) {
        if (node == null) return;

        // N L R
        if (setD.has(node.val)) {
            // Thus this node should be deleted
            // And before adding the left and right child
            // Check if they are in setD too
            preOrder(node.left, true);
            preOrder(node.right, true)
        } else {
            // Check if left child is to be deleted
            if (node.left) {
                if (setD.has(node.left.val)) {
                    preOrder(node.left, true);
                    // Break the existing connection
                    node.left = null;
                } else {
                    preOrder(node.left, false);
                }
            }

            // Check if right child is to be deleted
            if (node.right) {
                if (setD.has(node.right.val)) {
                    preOrder(node.right, true);
                    // Break the existing connection
                    node.right = null;
                } else {
                    preOrder(node.right, false);
                }
            }

            if (isRoot) forest.push(node);
        }

    }
};
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
 * @return {string[][]}
 */
var printTree = function (root) {
    if (root == null) return null;

    let h = height(root);
    let rows = h;
    let cols = Math.pow(2, h) - 1;

    // Design the matrix
    let matrix = new Array(rows).fill().map(() => Array(cols).fill(""));
    dfs(root, 0, 0, cols - 1);
    return matrix;

    function dfs(node, row, start, end) {
        if (node == null) return;
        // Put the node at the row = row and col = mid
        let mid = Math.floor((start + end) / 2);
        matrix[row][mid] = `${node.val}`;

        // Left Subtree
        dfs(node.left, row + 1, start, mid - 1);
        // Right Subtree
        dfs(node.right, row + 1, mid + 1, end);
    }

    function height(node) {
        if (node == null) return 0;

        let lh = height(node.left);
        let rh = height(node.right);

        return 1 + Math.max(lh, rh);
    }
};
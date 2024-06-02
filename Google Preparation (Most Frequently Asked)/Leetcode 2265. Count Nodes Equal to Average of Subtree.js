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
 * @return {number}
 */
var averageOfSubtree = function (root) {
    if (root == null) return 0;

    let avgNodeCount = 0;
    dfs(root);
    return avgNodeCount;

    function dfs(node) {
        // If null node
        if (node == null) return [0, 0]; // [sum of nodes, no. of nodes]

        // If leaf node
        if (node.left == null && node.right == null) {
            avgNodeCount++;
            return [node.val, 1];
        }

        // Go left and right
        let [leftSum, leftCount] = dfs(node.left);
        let [rightSum, rightCount] = dfs(node.right);

        let sum = leftSum + rightSum + node.val;
        let count = leftCount + rightCount + 1;

        let avg = Math.floor(sum / count);
        if (avg == node.val) avgNodeCount++;

        return [sum, count];
    }
};
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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (root, queries) {
    let n = countNodes(root);
    let st = new Array(n + 1);
    let end = new Array(n + 1); // index is 1 to n
    let index = 0;
    EulerTour(root);

    let depth = new Array(n + 1);
    dfs(root, 0);

    let prefixMax = new Array(n + 2).fill(0);
    let suffixMax = new Array(n + 2).fill(0);

    for (let i = 1; i <= n; i++) prefixMax[i] = Math.max(depth[i], prefixMax[i - 1]);
    for (let i = n; i >= 1; i--) suffixMax[i] = Math.max(depth[i], suffixMax[i + 1]);

    let result = [];
    for (let queryNode of queries) {
        let l = st[queryNode];
        let r = end[queryNode];

        result.push(Math.max(prefixMax[l - 1], suffixMax[r + 1]))
    }
    return result;

    function countNodes(node) {
        if (node == null) return 0;

        let leftNodes = countNodes(node.left);
        let rightNodes = countNodes(node.right);

        return 1 + leftNodes + rightNodes;
    }

    function EulerTour(node) {
        if (node == null) return;
        index++;
        st[node.val] = index;

        EulerTour(node.left);
        EulerTour(node.right);

        end[node.val] = index;
    }

    function dfs(node, d) {
        if (node == null) return;

        depth[st[node.val]] = d;

        dfs(node.left, d + 1);
        dfs(node.right, d + 1);
    }

};
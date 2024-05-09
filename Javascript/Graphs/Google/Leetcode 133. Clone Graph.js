/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (node == null) return null;

    let nodeMap = new Map();
    return dfs(node, nodeMap);
}

function dfs(node, nodeMap) {
    if (nodeMap.has(node)) return nodeMap.get(node);

    const cloneNode = new Node(node.val);
    nodeMap.set(node, cloneNode);

    for (const neighbor of node.neighbors) {
        const cloneNeighbor = dfs(neighbor, nodeMap);
        cloneNode.neighbors.push(cloneNeighbor);
    }

    return cloneNode;
}

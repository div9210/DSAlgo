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
    // Whenever I create a clone of a node
    // I need to have the access of that cloned node
    // So that i don't create it multiple times
    if (node == null) return null;
    let map = new Map(); // oldNode -> newNode

    return cloneTheNode(node, map);

    function cloneTheNode(node) {
        // Create a new node
        let newNode = new Node(node.val);
        map.set(node, newNode);

        // Set the neighbors for this newNode by copying the neighbors of node
        for (let nbr of node.neighbors) {
            // If already cloned
            if (map.has(nbr)) {
                let clonedNode = map.get(nbr);
                newNode.neighbors.push(clonedNode);
            } else {
                // Create the clonedNode and push it in newNode neighbors
                newNode.neighbors.push(cloneTheNode(nbr));
            }
        }

        return newNode;
    }
}

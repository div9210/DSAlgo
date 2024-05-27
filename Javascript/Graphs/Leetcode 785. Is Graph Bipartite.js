/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let V = graph.length;
    let colored = new Array(V).fill(-1);

    for (let i = 0; i < V; i++) {
        if (colored[i] === -1) { // Only start BFS if the node is not yet colored
            let q = [];
            q.push(i); // Start with node i
            colored[i] = 0; // Color the starting node

            while (q.length > 0) {
                let node = q.shift();
                let color = colored[node];

                if (graph[node]) {
                    for (let nbr of graph[node]) {
                        if (colored[nbr] === -1) {
                            let otherColor = color === 0 ? 1 : 0;
                            q.push(nbr);
                            colored[nbr] = otherColor;
                        } else if (colored[nbr] === color) {
                            return false; // Conflict in coloring found
                        }
                    }
                }
            }
        }
    }

    return true;
};
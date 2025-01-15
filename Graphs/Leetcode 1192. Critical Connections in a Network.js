/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  // Articulation Points : The vertices or the node which on removal breaks down the graph into multiple components
  // Articulation Edges (Bridges) : The edges in the graph which on removal breaks down the graph into multiple components

  // We can use Tarjan Algorithm
  let adjList = {} // Unordered Map

  for (let conn of connections) {
    let [u, v] = conn;

    // Since the graph is undirected
    // there will be an edge from u -> v  & v -> u
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);


    if (!adjList[v]) adjList[v] = [];
    adjList[v].push(u);
  }

  let tin = new Array(n).fill(0);
  let low = new Array(n).fill(0);

  let visited = new Array(n).fill(false);

  let bridges = [];
  let src = 0, timer = 1, parent = -1;
  dfs(src, timer, parent);

  return bridges;

  function dfs(src, timer, parent) {
    tin[src] = timer;
    low[src] = timer;

    visited[src] = true;

    for (let nbr of adjList[src]) {
      // Since the graph is undirected 
      // Only visit the node if that is not the neighbour itself
      if (nbr != parent) {
        if (!visited[nbr]) {
          // I will perform 3 steps here
          // 1. Make the dfs call
          dfs(nbr, timer + 1, src);

          // 2. Update the low while coming back
          low[src] = Math.min(low[src], low[nbr]);

          // 3. Bridge Checking
          if (low[nbr] <= tin[src]) {
            // nbr can reach src from the back
            continue; // No BRIDGE
          } else {
            bridges.push([src, nbr])
          }
        } else {
          low[src] = Math.min(low[src], low[nbr]);
        }
      }
    }
  }
};

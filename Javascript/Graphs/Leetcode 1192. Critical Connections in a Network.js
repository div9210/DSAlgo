/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */

// TARJAN Algorithm - Bridge in a Graph
var criticalConnections = function (n, connections) {
  // I can use the connection to create an adjList
  let adjList = {}; // Unorderder Map
  for (let conn of connections) {
    let u = conn[0];
    let v = conn[1];

    // I am going to be creating
    // 2 edges for u - v and v - u
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);

    if (!adjList[v]) adjList[v] = [];
    adjList[v].push(u);
  }
  // I will create 2 arrays
  // 1. To store tin (time of insertion of a server)
  // 2. To store low (lowest time possible for visiting a server)
  let tin = new Array(n).fill(0);
  let low = new Array(n).fill(0);
  let initialTimer = 1;
  let initialParent = -1;
  let bridges = [];
  let visited = new Array(n).fill(false);

  // Make the first dfs call
  dfs(0, initialTimer, initialParent);
  return bridges;

  function dfs(src, timer, parent) {
    // Mark src as visited
    visited[src] = true;
    tin[src] = timer;
    low[src] = timer;

    // Visit all of the neighbours which are not parent of the src
    for (let nbr of adjList[src]) {
      if (nbr != parent) {
        if (visited[nbr]) {
          // Update the lowest time for the src (Step U)
          low[src] = Math.min(low[src], low[nbr]);
        } else {
          // Make a dfs call for the nbr
          dfs(nbr, timer + 1, src);

          // On the backtracking trail
          // I will be under suspicion that the call i just made for the nbr
          // got it's low time updated. And if that's the case
          // I also want to update the low
          // So, performing Step-U
          low[src] = Math.min(low[src], low[nbr]);

          // Now for this src - nbr connecction
          // I want to perform BRIDGE TESTING
          if (tin[src] < low[nbr]) {
            bridges.push([src, nbr]);
          }
        }
      }
    }
  }
};

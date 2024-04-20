/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let visited = {}; // Unordered Map
  let n = isConnected.length;
  let components = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, isConnected, visited);
      components++;
    }
  }

  return components;

  function dfs(src, adjMatrix, visited) {
    // Mark the source as visited
    visited[src] = true;

    // Visit all the unvisited neighbours
    let fixedRow = src;
    for (let nbr = 0; nbr < adjMatrix.length; nbr++) {
      // Ignore the self connection
      if (fixedRow != nbr) {
        // If the nbr is not already visited and there is a connection in the adjacency matrix
        if (!visited[nbr] && adjMatrix[fixedRow][nbr] == 1) {
          dfs(nbr, adjMatrix, visited);
        }
      }
    }
  }
};

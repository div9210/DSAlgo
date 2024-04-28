var makeConnected = function (n, connections) {
  let visited = new Array(n).fill(false);
  let adjList = {};

  // Fill the adjList
  for (let conn of connections) {
    let u = conn[0];
    let v = conn[1];

    // Since the graph is undirected
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);

    if (!adjList[v]) adjList[v] = [];
    adjList[v].push(u);
  }

  // Apply dfs to all components of graph
  let disconnectedComponents = 0;
  for (let src = 0; src < n; src++) {
    if (!visited[src]) {
      dfs(src);
      disconnectedComponents++;
    }
  }

  // Check if it's possible to connect all components
  // We need minimum 1 edge to connect 2 nodes
  // 2 edges to connect 3 nodes
  // thus n - 1 edges to connect n nodes (minimum)
  // Checking if we have that
  if (connections.length < n - 1) return -1; // Not enough connections to connect all nodes

  let cablesNeeded = disconnectedComponents - 1;
  return cablesNeeded;

  function dfs(src) {
    // Mark src as visited
    visited[src] = true;

    // Visit all the unvisited neighbours
    if (adjList[src]) {
      for (let nbr of adjList[src]) {
        if (!visited[nbr]) {
          dfs(nbr);
        }
      }
    }
  }
};

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  let indegreeMap = {}; // Unordered Map
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
  let disconnectedComponents = -1;
  for (let src = 0; src < n; src++) {
    if (!visited[src]) {
      dfs(src);
      disconnectedComponents++;
    }
  }

  return disconnectedComponents;
  while (disconnectedComponents) {
    // Find in graph something that has indegree more than 1
  }

  function dfs(src) {
    // Mark src as visited
    visited[src] = true;

    // Visit all the unvisited neighbours
    if (adjList[src]) {
      for (let nbr of adjList[src]) {
        if (!visited[nbr]) {
          dfs(nbr);
        }
        if (!indegreeMap[nbr]) indegreeMap[nbr] = 0;
        indegreeMap[nbr]++;
      }
    }
  }
};

let n = 4,
  connections = [
    [0, 1],
    [0, 2],
    [1, 2],
  ];

console.log(makeConnected(n, connections));

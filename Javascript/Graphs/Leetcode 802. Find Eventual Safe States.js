/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  let visited = new Array(graph.length).fill(false);
  let callStack = new Array(graph.length).fill(false);

  let safeNodes = [];
  for (let u = 0; u < graph.length; u++) {
    let isCycle = dfsCycle(u, visited, callStack, graph);
    if (!isCycle) {
      safeNodes.push(u);
    }
  }

  return safeNodes;
  function dfsCycle(src, visited, callStack, graph) {
    // Mark src as visited
    // And add it in callStack
    visited[src] = true;
    callStack[src] = true;

    // Visit all the unvisited neighbours
    for (let nbr of graph[src]) {
      // visit if unvisited by any other component or node
      if (!visited[nbr]) {
        // Check further for cycle
        let further = dfsCycle(nbr, visited, callStack, graph);
        if (further) return true;
      }

      // Check if it is both visited and present in callStack
      if (callStack[nbr] && visited[nbr]) {
        return true;
      }
    }

    // If code reaches here that means
    // It's time to return thus remove the current node 
    // from callStack
    callStack[src] = false; // Backtracking
    return false;
  }
};

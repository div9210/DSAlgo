const { Graph } = require("../Implementation");

function GraphDFS(graph) {
  let edgeList = graph.edges;
  let visited = new Map();
  // Initialize the visited map
  for (let [key] of edgeList) {
    visited.set(key, false);
  }

  solve(graph.srcNode);

  function solve(srcNode) {
    visited.set(srcNode, true);
    console.log(srcNode);

    let neighboursForSrcNode = edgeList.get(srcNode);
    for (let n of neighboursForSrcNode) {
      let { neighbour } = n;
      // If not already visited
      if (!visited.get(neighbour)) {
        solve(neighbour);
      }
    }
  }
}

const g = new Graph();
g.addEdge("a", "b", 0);
g.addEdge("a", "c", 0);
g.addEdge("c", "d", 0);
g.addEdge("c", "e", 0);
g.addEdge("d", "e", 0);
g.addEdge("e", "f", 0);

GraphDFS(g);

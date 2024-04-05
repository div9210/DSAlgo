const { Graph } = require("../Implementation");

function GraphBFS(graph) {
  let edgeList = graph.edges;
  let visited = new Map();
  // Initialize the visited map
  for (let [key] of edgeList) {
    visited.set(key, false);
  }

  let q = [];
  q.push(graph.srcNode);
  // Since srcNode is in the queue
  // Mark it as visited
  visited.set(graph.srcNode, true);
  let printableBFS = "";
  while (q.length > 0) {
    let front = q.shift();
    printableBFS += front + " | ";
    // Push front neighbours which are not visited
    let neighbours = edgeList.get(front);
    neighbours.forEach((n) => {
      let { neighbour } = n;
      if (visited.get(neighbour) == false) {
        // Not visited
        q.push(neighbour);
        // Since now n is in the queue
        // Thus we can mark it as visited
        visited.set(neighbour, true);
      }
    });
  }

  console.log(printableBFS);
}

let g = new Graph();
g.addEdge("a", "b", 0);
g.addEdge("a", "c", 0);
g.addEdge("b", "c", 0);
g.addEdge("b", "d", 0);
g.addEdge("c", "e", 0);
g.addEdge("c", "f", 0);
g.addEdge("e", "f", 0);

GraphBFS(g);

const { Graph } = require("../Implementation");

function cycleDetectionDirected(graph) {
  let neighboursMap = graph.edges;

  let visited = new Map();
  for (let [key] of neighboursMap) {
    visited.set(key, false);
  }

  let q = [];
  q.push(graph.srcNode);
  visited.set(graph.srcNode, true);

  while (q.length > 0) {
    let front = q.shift();

    let neighboursList = neighboursMap.get(front) || [];
    for (let n of neighboursList) {
      let { neighbour } = n;
      if (visited.get(neighbour) == true) {
        return true;
      } else {
        q.push(neighbour);
        visited.set(neighbour, true);
      }
    }
  }

  return false;
}

let g = new Graph();
g.addEdge(0, 1, 1);
g.addEdge(1, 2, 1);
g.addEdge(2, 4, 1);
g.addEdge(2, 5, 1);
// g.addEdge(3, 1, 1);
g.addEdge(4, 3, 1);

console.log("cycleDetectionDirected", cycleDetectionDirected(g));

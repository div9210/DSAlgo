const { Graph } = require("../Implementation");

function cycleDetectionUndirected(graph) {
  let srcNode = graph.srcNode;

  let neighbours = graph.edges;
  let parent = new Map();
  let visited = new Map();
  // Fill the visited with false
  for (let [key] of neighbours) {
    // Mark each key as false
    visited.set(key, false);
  }

  let q = [];
  // There are 3 steps that happen together
  // 1. Push
  q.push(srcNode);
  // 2. Marking visited
  visited.set(srcNode, true);
  // 3. Marking parent
  parent.set(srcNode, null);

  while (q.length > 0) {
    // Extract the front of the queue
    let front = q.shift();
    let neighbourList = neighbours.get(front);

    for (let n of neighbourList) {
      let { neighbour } = n;
      // Check if it's visited
      if (visited.get(neighbour) == true) {
        // Either there is a cycle or it's fine to just continue
        // Checking when can we continue
        let parentOfNeighbour = parent.get(neighbour);
        if (parentOfNeighbour == null || neighbour == parent.get(front)) {
          // Continue;
          continue;
        } else {
          // Cycle
          return true;
        }
      }

      // If not visited
      // 1. Push
      q.push(neighbour);
      // 2. Marking visited
      visited.set(neighbour, true);
      // 3. Marking parent
      parent.set(neighbour, front);
    }
  }

  return false;
}

let g = new Graph();
g.addEdge(0, 1, 0);
g.addEdge(1, 2, 0);
g.addEdge(1, 3, 0);
g.addEdge(2, 4, 0);
g.addEdge(2, 5, 0);
g.addEdge(3, 4, 0);
g.print();

console.log("cycleDetectionUndirected : ", cycleDetectionUndirected(g));

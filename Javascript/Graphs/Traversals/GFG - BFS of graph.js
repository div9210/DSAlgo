class Solution {
  // Function to return Breadth First Traversal of given graph.
  bfsOfGraph(V, adj) {
    let visited = new Map();
    for (let i = 0; i < V; i++) {
      visited.set(i, false);
    }

    let q = [];
    q.push(0);
    // Mark 0 as true;
    visited.set(0, true);
    let printable = [];

    while (q.length > 0) {
      let front = q.shift();
      printable.push(front);

      let neighbours = adj[front];
      // Push the neighbbours in queue, if not already visited
      neighbours.forEach((n) => {
        if (!visited.get(n)) {
          // Not already visited
          q.push(n);
          // Since the n neighbour is in queue
          // I will mark it as visited
          visited.set(n, true);
        }
      });
    }

    return printable;
  }
}

const sol = new Solution();
console.log(
  sol.bfsOfGraph(4, [
    [0, 1],
    [1, 3],
    [1, 2],
    [2, 0],
  ])
);

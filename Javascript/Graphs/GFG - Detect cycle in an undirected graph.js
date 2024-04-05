class Solution {
  // Function to detect cycle in an undirected graph.
  solve(src, visited, adj) {
    let q = [];
    let parent = {};

    // Initial state
    q.push(src);
    visited[src] = true;
    parent[src] = -1;

    while (q.length > 0) {
      let frontNode = q.shift();

      for (let nbr of adj[frontNode]) {
        if (nbr === parent[frontNode]) {
          continue;
        }
        if (!visited[nbr]) {
          q.push(nbr);
          visited[nbr] = true;
          parent[nbr] = frontNode;
        } else if (visited[nbr] === true && parent[frontNode] !== nbr) {
          // Cycle present
          return true;
        }
      }
    }
    // Cycle not present
    return false;
  }

  isCycle(V, adj) {
    let visited = {};
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        let ans = this.solve(i, visited, adj);
        if (ans === true) {
          return true;
        }
      }
    }
    return false;
  }
}

const sol = new Solution();
// console.log(sol.isCycle(5, [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]));
console.log(sol.isCycle(4, [[], [1, 2], [2, 3], []]));

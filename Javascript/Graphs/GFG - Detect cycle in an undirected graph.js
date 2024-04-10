class Solution {
  // Function to detect cycle in an undirected graph.
  solve(src, visited, adj, parent) {
    // Mark src node as visited
    visited[src] = true;
    // Loop over the neighbours of src
    for (let n of adj[src]) {
      // If n is neighbour but also the parent of src
      if (n == parent) {
        // I don't want to check anything in this case
        continue;
      }
      if (!visited[n]) {
        // Check from this neighbour recursively
        let furtherAns = this.solve(n, visited, adj, src);
        if (furtherAns) return true;
      } else if (visited[n] == true && n != parent) {
        // Cycle present
        return true;
      }
    }

    return false;
  }

  isCycle(V, adj) {
    let visited = {};
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        // First parent for every node is always going to be -1
        let parent = -1;
        let ans = this.solve(i, visited, adj, parent);
        if (ans === true) {
          return true;
        }
      }
    }
    return false;
  }
}

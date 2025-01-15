// Using DFS
class Solution {
  // Function to detect cycle in a directed graph.
  solve(src, recursionStack, adj, visited) {
    // Mark src node as visited and add it to the recursion stack
    recursionStack[src] = true;
    visited[src] = true;

    // Loop over the neighbors of src
    for (let n of adj[src]) {
      if (!visited[n]) {
        let furtherAns = this.solve(n, recursionStack, adj, visited);
        if (furtherAns) return true;
      }
      if (recursionStack[n] == true && visited[n] == true) {
        return true;
      }
    }

    // Remove the current node from path after traversal
    recursionStack[src] = false;
    return false;
  }

  isCyclic(V, adj) {
    let recursionStack = {};
    let visited = {};
    // Check for cycle in each vertex
    for (let i = 0; i < V; i++) {
      let ans = this.solve(i, recursionStack, adj, visited);
      if (ans) {
        return true;
      }
    }

    return false;
  }
}

// Using BFS
class Solution {
  isCyclic(V, adj) {
    let topoSortNodes = topoSortBFS(V, adj);
    // There are V - 1 nodes in the graph
    // Topological sort must contain all of them
    // if it cannot, thus it means there is a cycle present in the graph

    if (topoSortNodes.length < V) {
      return true;
    }
    return false;

    function topoSortBFS(V, adj) {
      let result = [];
      let q = [];
      let indegree = {};

      // Initialize indegree map
      for (let nbrs of adj) {
        for (let n of nbrs) {
          indegree[n] ? indegree[n]++ : (indegree[n] = 1);
        }
      }

      // Since we are looping over adj list
      // and 0 does not come in any adj list (independent node)
      // Check all the independent nodes in all the disconnected components of graph
      for (let node = 0; node < V; node++) {
        if (!indegree[node]) {
          q.push(node);
        }
      }

      while (q.length > 0) {
        let front = q.shift();
        result.push(front);

        // Visit all it's neighbours and decrease one indegree for all of them
        // as the front node has been removed from the system
        // Thus front is not parent anymore
        for (let n of adj[front]) {
          // Minus 1 for every child / n since front is no more (moye moye)
          indegree[n]--;

          // If by doing this indegree becomes 0
          if (indegree[n] == 0) {
            q.push(n);
          }
        }
      }

      return result;
    }
  }
}

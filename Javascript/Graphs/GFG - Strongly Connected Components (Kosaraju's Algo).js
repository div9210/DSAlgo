//User function Template for javascript

/**
 * @param {number[][]} adj
 * @param {number} v
 * @param {number} e
 * @returns {number}
 */
class Solution {
  dfsForDependency(src, visited, ordering, adj) {
    // Mark src as visited
    visited[src] = true;

    // Visit all the unvisited neighbours in adj
    for (let n of adj[src]) {
      // Visit the n (if not already visited)
      if (!visited[n]) {
        this.dfsForDependency(n, visited, ordering, adj);
      }
    }

    // At the backtracking, store the ordering
    ordering.push(src);
  }

  normalDfs(src, visited, adj) {
    // Mark src as visited
    visited[src] = true;

    // Visit all the unvisited neighbours in adj
    for (let n of adj[src]) {
      // Visit the n (if not already visited)
      if (!visited[n]) {
        this.normalDfs(n, visited, adj);
      }
    }
  }

  kosaraju(adj, v, e) {
    // Use dfs to find dependency ordering
    let visited = Array(v).fill(false);
    let ordering = [];

    // Use this for all the disconnected components
    for (let i = 0; i < v; i++) {
      if (!visited[i]) {
        this.dfsForDependency(i, visited, ordering, adj);
      }
    }

    // Transpose the edges while traversing the original adjacency list
    let transposedAdj = Array(v)
      .fill()
      .map(() => []);

    for (let i = 0; i < v; i++) {
      if (adj[i]) {
        for (let n of adj[i]) {
          transposedAdj[n].push(i);
        }
      }
    }

    // Perform DFS on the transposed graph using the ordering from the first DFS
    let newVisited = Array(v).fill(false);
    let scc = 0; // Strongly Connected Components
    while (ordering.length > 0) {
      let element = ordering.pop();
      if (!newVisited[element]) {
        this.normalDfs(element, newVisited, transposedAdj);
        scc++;
      }
    }

    return scc;
  }
}

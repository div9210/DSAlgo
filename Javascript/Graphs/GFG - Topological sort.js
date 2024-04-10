// Using DFS
class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    let visited = {};
    let topoStack = [];
    // Check all the disconnected components of the graph
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        solve(i);
      }
    }

    // Now topoStack must be containing all the elements in reverse ordering (stack)
    return topoStack.reverse();

    function solve(src) {
      visited[src] = true;

      // Visit all the neighbours
      for (let n of adj[src]) {
        if (!visited[n]) {
          // Use recursion for further calls
          solve(n);
        }
      }

      // Backtracking call
      // While returning from a function call
      // i.e next line (last line of function)
      // Save the src node in stack
      topoStack.push(src);
    }
  }
}

// Using BFS -- KAHN's Algorithm
class Solution {
  topoSort(V, adj) {
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

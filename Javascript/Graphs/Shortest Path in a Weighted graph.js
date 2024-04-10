class Graph {
  constructor() {
    this.adj = {};
    this.src = null;
  }

  setUniDirection(u, v, weight) {
    // Set the src node
    if (this.src == null) {
      this.src = u;
    }

    if (this.adj[u]) {
      let prev = this.adj[u];
      prev.push({ el: v, w: weight });
      this.adj[u] = prev;
    } else {
      this.adj[u] = [{ el: v, w: weight }];
    }
  }

  addEdge(u, v, direction, weight = 1) {
    this.setUniDirection(u, v, weight);
    if (direction == 0) {
      this.setUniDirection(v, u, weight);
    }
  }

  topoLogicalSort() {
    let visited = {};
    let stack = [];

    // call sort for all of the disconnected components
    for (let key of Object.keys(this.adj)) {
      let numKey = Number(key);
      if (!visited[numKey]) {
        sort(numKey, this.adj);
      }
    }

    return stack.reverse();

    function sort(src, adj) {
      visited[src] = true;

      // Visit all the unvisited neighbours
      if (adj[src]) {
        for (let n of adj[src]) {
          if (!visited[n.el]) {
            sort(n.el, adj);
          }
        }
      }

      // When returning from recusion i wanna keep track in stack
      // i.e Backtracking
      stack.push(src);
    }
  }

  shortestPaths(topo, n) {
    let distance = Array(n).fill(Number.MAX_SAFE_INTEGER);

    // Initial State
    let src = topo.shift();
    distance[src] = 0;

    // Update all its neighbours' distances
    if (this.adj[src]) {
      for (let neighbor of this.adj[src]) {
        if (distance[src] + neighbor.w < distance[neighbor.el]) {
          // Update distance[neighbor.el]
          distance[neighbor.el] = distance[src] + neighbor.w;
        }
      }
    }

    // Do same for all the other elements in the topoStack
    while (topo.length > 0) {
      // Update all its neighbours' distances
      let src = topo.pop();

      if (this.adj[src]) {
        for (let neighbor of this.adj[src]) {
          if (distance[src] + neighbor.w < distance[neighbor.el]) {
            // Update distance[neighbor]
            distance[neighbor.el] = distance[src] + neighbor.w;
          }
        }
      }
    }

    return distance;
  }
}

let g = new Graph();
g.addEdge(0, 1, 1, 5);
g.addEdge(0, 2, 1, 3);
g.addEdge(1, 3, 1, 3);
g.addEdge(2, 1, 1, 2);
g.addEdge(2, 3, 1, 5);
g.addEdge(2, 4, 1, 6);
g.addEdge(4, 3, 1, 1);

let topo = g.topoLogicalSort();
let n = 5;

let distance = g.shortestPaths(topo, n);
console.log("distance", distance);

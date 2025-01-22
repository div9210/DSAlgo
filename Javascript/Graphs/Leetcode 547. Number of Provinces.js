/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let visited = {} // Unordered Map
  let n = isConnected.length;
  let components = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, isConnected, visited);
      components++
    }
  }

  return components;

  function dfs(row, adjMatrix, visited) {
    // Mark the source as visited
    visited[row] = true;

    // Visit all the unvisited neighbours
    for (let col = 0; col < adjMatrix.length; col++) {
      // Ignore the self connection
      if (row != col) {
        // If the col is not already visited and there is a connection in the adjacency matrix
        if (!visited[col] && adjMatrix[row][col] == 1) {
          dfs(col, adjMatrix, visited)
        }
      }
    }
  }
};

// var findCircleNum = function(isConnected) {
//     let n = isConnected.length;
//     let ds = new DisjointSet(n);

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             if( i != j && isConnected[i][j] == 1) {
//                 ds.unionBySize(i, j);
//             }
//         }
//     }

//     let count = 0;
//     for(let city = 0; city < n; city++) {
//         if(ds.findRootParent(city) == city) count++;
//     }

//     return count;
// };

// class DisjointSet {
//     constructor(size) {
//         this.rank = new Array(size).fill(0);
//         this.size = new Array(size).fill(1);
//         this.parent = new Array(size).fill().map((e, i) => i);
//     }

//     findRootParent(node) {
//         if (node == this.parent[node]) return node;

//         return this.parent[node] = this.findRootParent(this.parent[node]);
//     }

//     unionByRank(u, v) {
//         let uParent = this.findRootParent(u);
//         let vParent = this.findRootParent(v);

//         if (uParent != vParent) {
//             if (this.rank[uParent] > this.rank[vParent]) {
//                 this.parent[vParent] = uParent;
//             } else if (this.rank[vParent] > this.rank[uParent]) {
//                 this.parent[uParent] = vParent;
//             } else {
//                 this.parent[uParent] = vParent;
//                 this.rank[uParent]++;
//             }
//         }
//     }

//     unionBySize(u, v) {
//         let uParent = this.findRootParent(u);
//         let vParent = this.findRootParent(v);

//         if(uParent != vParent) {
//             if(this.size[uParent] > this.size[vParent]) {
//                 this.parent[vParent] = uParent;
//                 this.size[uParent] += this.size[vParent];
//             }else {
//                 this.parent[uParent] = vParent;
//                 this.size[vParent] += this.size[uParent];
//             }
//         }
//     }
// }
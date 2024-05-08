class Solution {
  //Function to find the shortest distance of all the cells from 0 present in the matrix.
  // Floyd Warshall
  shortest_distance(matrix) {
    let n = matrix.length;
    // In an n * n matrix, treat each cell as a helper node
    for (let helperNode = 0; helperNode < n; helperNode++) {
      // Use this helperNode in all of the src - dest pair
      for (let src = 0; src < n; src++) {
        for (let dest = 0; dest < n; dest++) {
          if (
            matrix[src][helperNode] !== -1 &&
            matrix[helperNode][dest] !== -1
          ) {
            let distanceUsingHelperNode =
              matrix[src][helperNode] + matrix[helperNode][dest];
            if (matrix[src][dest] == -1) {
              matrix[src][dest] = distanceUsingHelperNode;
            } else {
              matrix[src][dest] = Math.min(
                matrix[src][dest],
                distanceUsingHelperNode
              );
            }
          }
        }
      }
    }
  }
}

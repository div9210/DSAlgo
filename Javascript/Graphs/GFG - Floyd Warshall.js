class Solution {
  //Function to find the shortest distance of all the cells from 0 present in the matrix.
  // Floyd Warshall
  shortest_distance(matrix) {
    for (let helperNode = 0; helperNode < matrix.length; helperNode++) {
      // Use this helper node in all of the src dest combinations
      for (let src = 0; src < matrix.length; src++) {
        for (let dest = 0; dest < matrix.length; dest++) {
          // distance of src - dest
          // will be min of src-dst and src-helper-dest

          // Since question says -1 indicates there is no edge
          if (matrix[src][helperNode] != -1 && matrix[helperNode][dest] != -1) {
            if (matrix[src][dest] != -1) {
              matrix[src][dest] = Math.min(
                matrix[src][dest],
                matrix[src][helperNode] + matrix[helperNode][dest]
              );
            } else {
              matrix[src][dest] =
                matrix[src][helperNode] + matrix[helperNode][dest];
            }
          }
        }
      }
    }

    return matrix;
  }
}

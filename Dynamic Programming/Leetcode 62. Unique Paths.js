/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     let directions = [[0, 1], [1, 0]];
//     let dp = Array(m).fill().map(() => Array(n).fill(-1));
//     return travel(0, 0);

//     function travel(srcx, srcy) {
//         if (srcx == m - 1 && srcy == n - 1) {
//             // Reached
//             return 1;
//         }

//         if (dp[srcx][srcy] != -1) return dp[srcx][srcy];

//         // Travel in the given directions
//         let paths = 0
//         for (let [dx, dy] of directions) {
//             let newx = srcx + dx;
//             let newy = srcy + dy;
//             if (inBound(newx, newy)) {
//                 paths += travel(newx, newy)
//             }
//         }

//         return dp[srcx][srcy] = paths;
//     }

//     function inBound(x, y) {
//         return x >= 0 && x < m && y >= 0 && y < n;
//     }
// };

var uniquePaths = function (m, n) {
  let directions = [
    [0, 1],
    [1, 0],
  ];
  let dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0)); // Initialize with 0

  dp[m - 1][n - 1] = 1;
  for (let srcx = m - 1; srcx >= 0; srcx--) {
    for (let srcy = n - 1; srcy >= 0; srcy--) {
      let paths = 0;
      for (let [dx, dy] of directions) {
        let newx = srcx + dx;
        let newy = srcy + dy;
        if (inBound(newx, newy, m, n)) {
          paths += dp[newx][newy];
        }
      }
      dp[srcx][srcy] += paths;
    }
  }

  return dp[0][0];

  function inBound(x, y, m, n) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxLength = 0;

  const dp = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      maxLength = Math.max(maxLength, dfs(i, j));
    }
  }

  return maxLength;

  function dfs(x, y) {
    if (dp[x][y] !== 0) return dp[x][y];

    let max = 1;
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (inBound(newX, newY) && matrix[newX][newY] > matrix[x][y]) {
        max = Math.max(max, 1 + dfs(newX, newY));
      }
    }
    dp[x][y] = max;
    return max;
  }

  function inBound(x, y) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
  }
};

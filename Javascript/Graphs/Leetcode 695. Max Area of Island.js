/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // UP RIGHT DOWN LEFT
  let maxA = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        let area = [0];
        dfs(i, j, area);
        maxA = Math.max(maxA, area);
      }
    }
  }

  return maxA;

  function dfs(srcx, srcy, area) {
    // Mark visited
    // Turn land back to water
    grid[srcx][srcy] = 0;
    area[0]++;

    // Visit all the directions of land
    for (let [dx, dy] of directions) {
      let newx = srcx + dx;
      let newy = srcy + dy;
      if (inBound(newx, newy) && grid[newx][newy] == 1) {
        dfs(newx, newy, area);
      }
    }
  }

  function inBound(x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
  }
};

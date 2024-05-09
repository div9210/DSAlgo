/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // UP RIGHT DOWN LEFT
  let subIslands = [];
  // Run dfs to find islands on grid 2 with conditions that it should be a valid land in grid 1 as well
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[i].length; j++) {
      if (grid2[i][j] == 1 && grid1[i][j] == 1) {
        // A land
        let island = [];
        dfs(i, j, island);
        subIslands.push(island);
      }
    }
  }
  let count = 0;
  for (let island of subIslands) {
    // If all the coordinates of island exists in grid 1
    let isValid = true;
    for (let coord of island) {
      let x = coord[0];
      let y = coord[1];
      if (grid1[x][y] == 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      count++;
    }
  }

  return count;

  function dfs(srcx, srcy, island) {
    // Mark src as visited
    // No need to use additional visited
    // We can turn land back to water to mark it visited
    grid2[srcx][srcy] = 0;
    island.push([srcx, srcy]);

    // Visit all the reachable directions
    for (let [dx, dy] of directions) {
      let newx = srcx + dx;
      let newy = srcy + dy;
      if (inBound(newx, newy) && grid2[newx][newy] == 1) {
        dfs(newx, newy, island);
      }
    }
  }

  function inBound(x, y) {
    return x >= 0 && x < grid1.length && y >= 0 && y < grid1[0].length;
  }
};

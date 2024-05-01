/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // Reverse Engineering
  // Rahter than visiting each cell and finding out if water from it
  // can reach the pacific and atlantic ocean.
  // I will take each atlantic and pacific cell and check which cells they can reach
  // By treating the opposite of given condition
  // So any cell can be reached if that cell is either equal or MORE than me.

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // UP RIGHT DOWN LEFT

  // Starting with pacific ocean cells [0, col] && [row, 0]
  let pacificVisited = Array(heights.length)
    .fill()
    .map(() => Array(heights[0].length).fill(false));
  for (let col = 0; col < heights[0].length; col++) {
    dfs(0, col, pacificVisited);
  }

  for (let row = 0; row < heights.length; row++) {
    dfs(row, 0, pacificVisited);
  }

  let atlanticVisited = Array(heights.length)
    .fill()
    .map(() => Array(heights[0].length).fill(false));
  for (let col = 0; col < heights[0].length; col++) {
    dfs(heights.length - 1, col, atlanticVisited);
  }

  for (let row = 0; row < heights.length; row++) {
    dfs(row, heights[0].length - 1, atlanticVisited);
  }

  let result = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (pacificVisited[i][j] && atlanticVisited[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;

  function dfs(srcx, srcy, visited) {
    // Marking the src as visited
    visited[srcx][srcy] = true;

    // Visit all the directions
    for (let [dx, dy] of directions) {
      let newx = srcx + dx;
      let newy = srcy + dy;

      if (
        inBound(newx, newy, heights) &&
        heights[newx][newy] >= heights[srcx][srcy] &&
        !visited[newx][newy]
      ) {
        dfs(newx, newy, visited);
      }
    }
  }
  function inBound(x, y, heights) {
    return x >= 0 && x < heights.length && y >= 0 && y < heights[0].length;
  }
};

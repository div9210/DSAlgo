/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // Base case
  if (grid.length == 0 || grid[0].length == 0) return 0; // No islands

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] // UP RIGHT DOWN LEFT (ClockWise)

  let rows = grid.length;
  let cols = grid[0].length;
  // let visited = Array(rows).fill().map(() => Array(cols).fill(false));

  let islands = 0;
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y] == "1") {
        dfs(x, y);
        islands++;
      }
    }
  }

  return islands;


  function dfs(x, y) {
    // Mark the position as visited
    // visited[x][y] = true;
    grid[x][y] = "0"; // Turning land back to water so that it does not get traversed again

    // I can travel all four directions from here
    for (let [dx, dy] of directions) {
      let newx = x + dx;
      let newy = y + dy;

      if (inBounds(newx, newy) && grid[newx][newy] == "1") {
        dfs(newx, newy);
      }
    }
  }

  function inBounds(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }
};
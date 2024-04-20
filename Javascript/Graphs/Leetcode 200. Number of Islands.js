/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length == 0 || grid[0].length == 0) return 0;

  let visited = Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(false));

  let islands = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited[row][col] && grid[row][col] === "1") {
        // Check if cell is unvisited land
        dfs(row, col, grid, visited, rows, cols);
        islands++;
      }
    }
  }

  return islands;

  function dfs(srcRow, srcCol, adjMatrix, visited, rows, cols) {
    // Mark current cell as visited
    visited[srcRow][srcCol] = true;

    // Visit all the neighbours that are not already visited
    let directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    for (let [dx, dy] of directions) {
      let visitingRow = srcRow + dx;
      let visitingCol = srcCol + dy;

      // Check if the neighbor is within the grid boundaries
      if (
        visitingRow >= 0 &&
        visitingRow < rows &&
        visitingCol >= 0 &&
        visitingCol < cols
      ) {
        // Visit unvisited land cells
        if (
          !visited[visitingRow][visitingCol] &&
          adjMatrix[visitingRow][visitingCol] === "1"
        ) {
          dfs(visitingRow, visitingCol, adjMatrix, visited, rows, cols);
        }
      }
    }
  }
};

// CHAT GPT - Convert land to water to let us know that it is visited
/**
 * @param {character[][]} grid - The input grid representing the map of '1's (land) and '0's (water).
 * @return {number} - The number of islands.
 */
var numIslands = function (grid) {
  // Check if grid is empty or null
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  // Iterate through each cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If the current cell is land (value is '1')
      if (grid[i][j] === "1") {
        dfs(i, j); // Explore the island
        islands++; // Increment the island count
      }
    }
  }

  return islands;

  // Depth-first search function to explore connected land cells
  function dfs(row, col) {
    grid[row][col] = "0"; // Mark current cell as visited (convert land to water)

    // Check if current cell is out of bounds or is water
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // Recursively explore all four directions
    dfs(row + 1, col); // Down
    dfs(row - 1, col); // Up
    dfs(row, col + 1); // Right
    dfs(row, col - 1); // Left
  }
};

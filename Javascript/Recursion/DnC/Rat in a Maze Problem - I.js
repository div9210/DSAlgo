class Solution {
  isMovementSafe(m, rows, columns, newX, newY, visited) {
    // If the new coordinates are invalid
    if (newX >= rows || newY >= columns || newX < 0 || newY < 0) {
      return false;
    }

    // If the new coordinates indicates a blocked position
    if (m[newX][newY] == 0) {
      return false;
    }

    // If the new coordinates indicates a visited position
    if (visited[newX][newY] == true) {
      return false;
    }

    return true;
  }

  findAllPossiblePaths(m, rows, columns, ratX, ratY, path, visited) {
    // Base case
    // Rat has reached the destination coordinates
    if (ratX == rows - 1 && ratY == columns - 1) {
      console.log(path);
      return;
    }

    // Now take steps in each direction and see if it's safe
    // 1. Taking UP direction i.e [ratX - 1, ratY] and
    // calling function to check if the movement is safe.
    let newX = ratX - 1;
    let newY = ratY;
    if (this.isMovementSafe(m, rows, columns, newX, newY, visited)) {
      path = path + "U";
      visited[newX][newY] = true;
      this.findAllPossiblePaths(m, rows, columns, newX, newY, path, visited);
      // If it comes back here, without any base case answer
      // We need to remove the movement we just did (Backtracking)
      path = path.slice(0, -1);
      visited[newX][newY] = false;
    }

    // 2. Taking RIGHT direction i.e [ratX, ratY + 1] and
    // calling function to check if the movement is safe.
    newX = ratX;
    newY = ratY + 1;
    if (this.isMovementSafe(m, rows, columns, newX, newY, visited)) {
      path = path + "R";
      visited[newX][newY] = true;
      this.findAllPossiblePaths(m, rows, columns, newX, newY, path, visited);
      // If it comes back here, without any base case answer
      // We need to remove the movement we just did (Backtracking)
      path = path.slice(0, -1);
      visited[newX][newY] = false;
    }

    // 1. Taking DOWN direction i.e [ratX + 1, ratY] and
    // calling function to check if the movement is safe.
    newX = ratX + 1;
    newY = ratY;
    if (this.isMovementSafe(m, rows, columns, newX, newY, visited)) {
      path = path + "D";
      visited[newX][newY] = true;
      this.findAllPossiblePaths(m, rows, columns, newX, newY, path, visited);
      // If it comes back here, without any base case answer
      // We need to remove the movement we just did (Backtracking)
      path = path.slice(0, -1);
      visited[newX][newY] = false;
    }

    // 1. Taking LEFT direction i.e [ratX, ratY - 1] and
    // calling function to check if the movement is safe.
    newX = ratX;
    newY = ratY - 1;
    if (this.isMovementSafe(m, rows, columns, newX, newY, visited)) {
      path = path + "L";
      visited[newX][newY] = true;
      this.findAllPossiblePaths(m, rows, columns, newX, newY, path, visited);
      // If it comes back here, without any base case answer
      // We need to remove the movement we just did (Backtracking)
      path = path.slice(0, -1); // Remove the last character
      visited[newX][newY] = false;
    }
  }

  findPath(m, n) {
    let rows = m.length;
    let columns = m[0].length;
    let ratX = 0;
    let ratY = 0;
    if (m[ratX][ratY] == 0) {
      return -1;
    }

    // create a new visited maze, that tells if a position is already visited
    let visitedMaze = this.create2DArray(m.length, n);
    let path = "";

    this.findAllPossiblePaths(m, rows, columns, ratX, ratY, path, visitedMaze);
  }

  create2DArray(m, n) {
    let array = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(false);
      }
      array.push(row);
    }
    return array;
  }
}

let solution = new Solution();
let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
let n = 4;
solution.findPath(maze, n);

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (grid.length == 0 || grid[0].length == 0) return 0;

  let maxMinutes = 0;
  let rottenQueue = [];
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  // Initial state - Push all the rotten oranges in the queue
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 2) {
        rottenQueue.push({ row: row, col: col, minute: 0 });
      }
    }
  }

  while (rottenQueue.length > 0) {
    let front = rottenQueue.shift();
    for (let [dx, dy] of directions) {
      let newX = front.row + dx;
      let newY = front.col + dy;

      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] == 1
      ) {
        // Rotten it
        let minute = front.minute + 1;
        maxMinutes = Math.max(maxMinutes, minute);
        grid[newX][newY] = 2;
        // Push it back in the queue
        rottenQueue.push({ row: newX, col: newY, minute: minute });
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 1) {
        return -1;
      }
    }
  }

  return maxMinutes;
};

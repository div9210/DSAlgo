/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // Find all the 0 position that cannot be captured
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // UP RIGHT BOTTOM LEFT

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] == "O" &&
        (i == 0 || i == board.length - 1 || j == 0 || j == board[i].length - 1)
      ) {
        notCaptureFrom(board, i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "O") {
        // Flip it
        board[i][j] = "X";
      } else if (board[i][j] == "N") {
        // RESET it to "O" i.e Not flippable
        board[i][j] = "O";
      }
    }
  }

  function notCaptureFrom(board, srcX, srcY) {
    // Mark src as visited
    // Marking N also means we have visited this, so we can check it further
    board[srcX][srcY] = "N"; // Not to be flipped

    for (let [dx, dy] of directions) {
      let newX = srcX + dx;
      let newY = srcY + dy;

      if (
        inBound(newX, newY) &&
        board[newX][newY] != "N" &&
        board[newX][newY] == "O"
      ) {
        notCaptureFrom(board, newX, newY);
      }
    }
  }

  function inBound(x, y) {
    return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
  }
};

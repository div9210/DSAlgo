var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    // Row Check
    for (j = 0; j < board[i].length; j++) {
      let rowSet = new Set();
      if (board[i][j] !== ".") {
        if (rowSet.has(board[i][j])) {
          return false;
        } else {
          rowSet.add(board[i][j]);
        }
      }
    }

    // Column Check
    // Treating i as the column and k as the row
    for (k = 0; k < 9; k++) {
      let columnSet = new Set();
      if (board[k][i] !== ".") {
        if (columnSet.has(board[k][i])) {
          return false;
        } else {
          columnSet.add(board[k][i]);
        }
      }
    }
  }

  return true;
};

function squareWise(board, element, row, column) {
  // Need to find the square
  const squareRow = Math.floor(row / 3);
  const squareColumn = Math.floor(column / 3);
  for (let i = squareRow * 3; i < squareRow * 3 + 3; i++) {
    for (let j = squareColumn * 3; j < squareColumn * 3 + 3; j++) {
      if ((i === row && j === column) || element === ".") continue;
      else {
        if (board[i][j] === element) {
          return false;
        }
      }
    }
  }
  return true;
}

const sudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const result = isValidSudoku(sudoku);
console.log("result", result);

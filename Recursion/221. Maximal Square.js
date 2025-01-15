function solve(m, rows, columns, currentX, currentY, maxi) {
  // Base case
  if (currentX >= rows || currentY >= columns) {
    return 0;
  }

  // Explore the three directions
  // 1. Right
  let right = solve(m, rows, columns, currentX, currentY + 1, maxi);
  // 2. Diagonal
  let diagonal = solve(m, rows, columns, currentX + 1, currentY + 1, maxi);
  // 3. Down
  let down = solve(m, rows, columns, currentX + 1, currentY, maxi);

  if (m[currentX][currentY] == "1") {
    let squareUptoThisPoint = 1 + Math.min(right, down, diagonal);
    maxi.maxTillNow = Math.max(squareUptoThisPoint, maxi.maxTillNow);
    return squareUptoThisPoint;
  } else {
    // m[currentX][currentY] points to zero
    // so it does not matter what was returned from right, down and diagonal
    // Keeping this point as the start index of square and since it is zero
    // a square cannot be formed at all
    return 0;
  }
}

var maximalSquare = function (matrix) {
  let rows, columns, currentX, currentY, maxTillNow;
  rows = matrix.length;
  columns = matrix[0].length;
  currentX = 0;
  currentY = 0;
  maxTillNow = 0; // Since number is of pass by value type
  // Pass it in a object, for reference
  let maxi = {
    maxTillNow,
  };

  solve(matrix, rows, columns, currentX, currentY, maxi);

  return maxi.maxTillNow * maxi.maxTillNow;
};

let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "1", "1", "1"],
];

console.log(maximalSquare(matrix));

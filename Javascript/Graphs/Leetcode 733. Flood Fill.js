var floodFill = function (image, sr, sc, color) {
  let startingColor = image[sr][sc];
  if (startingColor == color) return image;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let visited = Array(image.length)
    .fill()
    .map(() => Array(image[0].length).fill(false));
  dfs(image, sr, sc, color, startingColor, visited);
  return image;

  function dfs(image, sr, sc, color, startingColor, visited) {
    // Set the color of the current pixel
    image[sr][sc] = color;
    visited[sr][sc] = true;

    // Visit all four directions from the source point
    for (const [dx, dy] of directions) {
      let visitingX = sr + dx;
      let visitingY = sc + dy;
      // Check if visiting node is in bounds
      // visiting color is same as starting color
      // and it is not already visited
      if (
        inBounds(visitingX, visitingY) &&
        image[visitingX][visitingY] == startingColor &&
        visited[visitingX][visitingY] == false
      ) {
        dfs(image, visitingX, visitingY, color, startingColor, visited);
      }
    }
  }

  function inBounds(x, y) {
    return x >= 0 && y >= 0 && x < image.length && y < image[0].length;
  }
};

// Since you are marking visited but also changing the src color to new color
// it is not going to be equal to starting color
// So even if you don't use visited, it will work
// saving memory and time
var floodFill = function (image, sr, sc, color) {
  let startingColor = image[sr][sc];
  if (startingColor == color) return image;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  // let visited = Array(image.length).fill().map(() => Array(image[0].length).fill(false));
  dfs(image, sr, sc, color, startingColor);
  return image;

  function dfs(image, sr, sc, color, startingColor) {
    // Set the color of the current pixel
    image[sr][sc] = color;
    // visited[sr][sc] = true;

    // Visit all four directions from the source point
    for (const [dx, dy] of directions) {
      let visitingX = sr + dx;
      let visitingY = sc + dy;
      // Check if visiting node is in bounds
      // visiting color is same as starting color
      // and it is not already visited
      if (
        inBounds(visitingX, visitingY) &&
        image[visitingX][visitingY] ==
        startingColor /*&& visited[visitingX][visitingY] == false*/
      ) {
        dfs(image, visitingX, visitingY, color, startingColor);
      }
    }
  }

  function inBounds(x, y) {
    return x >= 0 && y >= 0 && x < image.length && y < image[0].length;
  }
};

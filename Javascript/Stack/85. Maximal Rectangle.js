const { Stack } = require("./Stack");
function rightMinAtForHistogram(histogram) {
  let stack = new Stack();
  stack.push(histogram.length); // The most right element exists at histogram.length index

  let ansArr = [];
  for (let i = histogram.length - 1; i >= 0; i--) {
    let tower = histogram[i];
    while (
      !stack.isEmpty() &&
      histogram[stack.peek()] &&
      histogram[stack.peek()] >= tower
    ) {
      stack.pop();
    }
    // Now the left min element is in stack
    ansArr[i] = stack.peek();
    stack.push(i);
  }

  stack.clear();
  return ansArr;
}

function leftMinAtForHistogram(histogram) {
  let stack = new Stack();
  stack.push(-1); // The most left element exists at -1 index

  let ansArr = [];
  for (let i = 0; i < histogram.length; i++) {
    let tower = histogram[i];
    while (
      !stack.isEmpty() &&
      histogram[stack.peek()] &&
      histogram[stack.peek()] >= tower
    ) {
      stack.pop();
    }
    // Now the left min element is in stack
    ansArr[i] = stack.peek();
    stack.push(i);
  }

  stack.clear();
  return ansArr;
}

function largestArea(histogram) {
  let leftExpandable = leftMinAtForHistogram(histogram);
  let rightExpandable = rightMinAtForHistogram(histogram);
  let areas = histogram.map((tower, i) => {
    let width = rightExpandable[i] - leftExpandable[i] - 1;
    let height = tower;
    return width * height;
  });
  return Math.max(...areas);
}
var maximalRectangle = function (matrix) {
  // Break the matrix into series of histograms
  // Note the first row doesn't need special attention
  // And can be sent directly
  let histograms = [];
  // First convert the matrix of characters into matrix of numbers
  for (let i = 0; i < matrix.length; i++) {
    let h = [];
    for (let j = 0; j < matrix[i].length; j++) {
      h.push(Number(matrix[i][j]));
    }
    histograms.push(h);
  }

  // Sending first row as it is
  let maxArea = -1;
  let maxFromFirstH = largestArea(histograms[0]);
  maxArea = maxArea > maxFromFirstH ? maxArea : maxFromFirstH;
  // Treat rest of the histograms as summed up
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (histograms[i][j] == 1) {
        // Add the previous column too
        histograms[i][j] += histograms[i - 1][j];
      } else {
        histograms[i][j] = 0;
      }
    }
    // Now the current histogram is set
    // Send that to largestArea
    let currentMaxH = largestArea(histograms[i]);
    maxArea = maxArea > currentMaxH ? maxArea : currentMaxH;
  }

  return maxArea;
};

let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalRectangle(matrix));

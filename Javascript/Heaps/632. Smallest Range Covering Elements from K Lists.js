// VVVVV Imp

const { MinHeapWithComp } = require("./MinHeap with Comparator");

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let minH = new MinHeapWithComp((a, b) => a.data - b.data);

  // Process first k elements and keep track of max and min
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    // Pick first element from each array
    let data = nums[i][0];
    let row = i;
    let col = 0;
    minH.insert({ data, row, col });
    if (data > max) max = data;
    if (data < min) min = data;
  }

  // My current range lies in min - max
  let ansMax = max;
  let ansMin = min;

  while (minH.size() != 0) {
    let top = minH.peek();
    // Remove top from minH
    minH.extractMin();
    min = top.data;

    // Update the range if necessary
    if (max - min < ansMax - ansMin) {
      ansMax = max;
      ansMin = min;
    }

    // Put next element in the heap (if exists)
    if (top.col + 1 < nums[top.row].length) {
      let nextData = nums[top.row][top.col + 1];
      if (nextData > max) max = nextData;

      let nextRow = top.row;
      let nextCol = top.col + 1;

      minH.insert({ data: nextData, row: nextRow, col: nextCol });
    }
  }

  return [ansMin, ansMax];
};

const {
  HeapWithComparator,
} = require("./Implementation from Scratch/HeapWithComparator");

var maxSlidingWindow = function (nums, k) {
  let maxH = new HeapWithComparator((a, b) => b.num - a.num);
  let result = [];
  // Process first window
  for (let i = 0; i < k; i++) {
    maxH.insert({ num: nums[i], index: i });
  }

  result.push(maxH.peek());

  // Process rest of the nums
  for (let i = k; i < nums.length; i++) {
    // Remove any top elements that are out of the window
    // In current iteration
    while (maxH.peek().index <= i - k) {
      // Out of window
      maxH.delete();
    }

    // Now put the new element
    maxH.insert({ num: nums[i], index: i });
    result.push(maxH.peek());
  }

  return result;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

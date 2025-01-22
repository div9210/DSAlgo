const {
  HeapWithComparator,
} = require("./Implementation from Scratch/HeapWithComparator");

var minimumDifference = function (nums) {
  let n = nums.length / 3;
  let minH = new HeapWithComparator((a, b) => a - b);
  let maxH = new HeapWithComparator((a, b) => b - a);

  let prefix = new Array(nums.length).fill(-1),
    suffix = new Array(nums.length).fill(-1);

  let sum = 0;
  // Store prefix sum
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxH.insert(nums[i]);

    if (maxH.size() > n) {
      // Remove the max element from both sum and heap
      sum -= maxH.peek();
      maxH.delete();
    }

    if (maxH.size() == n) {
      // We have our sum
      prefix[i] = sum;
    }
  }
  sum = 0;
  // Store suffix sum
  for (let i = nums.length - 1; i >= 0; i--) {
    sum += nums[i];
    minH.insert(nums[i]);

    if (minH.size() > n) {
      // Remove the max element from both sum and heap
      sum -= minH.peek();
      minH.delete();
    }

    if (minH.size() == n) {
      // We have our sum
      suffix[i] = sum;
    }
  }

  let minSum = Number.MAX_SAFE_INTEGER;

  for (let i = n - 1; i < 2 * n; i++) {
    minSum = Math.min(minSum, prefix[i] - suffix[i + 1]);
  }

  return minSum;
};

let nums = [7, 9, 5, 8, 1, 3];
console.log(minimumDifference(nums));

/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane Algorithm
var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    maxSum = Math.max(sum, maxSum);
    sum = sum <= 0 ? 0 : sum;
  }

  return maxSum;
};

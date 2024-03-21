var findTargetSumWays = function (nums, target) {
  let index = 0;
  let ans = solveMax();
  let maxProfit = Number.MIN_SAFE_INTEGER;
  let currProfit = 0;
  function solveMax(nums, target, index, currProfit) {
    if (index >= nums.length) {
      return;
    }
    if (target == 0) {
      maxProfit = Math.max(maxProfit, currProfit);
      return;
    }

    // Include nums[i]
    solveMax(nums, target - nums[index], index + 1, currProfit + nums[i]);

    // Exclude nums[i]
    solveMax(nums, target);
  }
};

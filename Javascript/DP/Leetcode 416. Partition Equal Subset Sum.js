/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((total, curr) => total + curr, 0);
  let isEven = sum % 2 == 0;
  if (!isEven) return false;

  let target = sum / 2;
  let index = 0;

  let dp = Array(nums.length)
    .fill()
    .map(() => Array(target).fill(null));
  let ans = solve(nums, index, target);
  return ans;

  function solve(nums, index, target) {
    // Base Cases
    if (index >= nums.length) return false;
    if (target == 0) return true;

    if (dp[index][target] != null) {
      return dp[index][target];
    }

    let include = solve(nums, index + 1, target - nums[index]);
    let exclude = solve(nums, index + 1, target);

    dp[index][target] = include || exclude;
    return dp[index][target];
  }
};

var canPartition = function (nums) {
  let sum = nums.reduce((total, curr) => total + curr, 0);
  let isEven = sum % 2 == 0;
  if (!isEven) return false;

  let target = sum / 2;

  // Step 1: Initialization
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(target + 1).fill(false));

  // Base Case
  for (let row = 0; row <= nums.length; row++) {
    // For every row, if target (col) is zero set true
    // which is another way of saying if(target == 0) in the matrix ans is true.
    dp[row][0] = true;
  }

  // Step 2: Filling the Table
  for (let index = nums.length - 1; index >= 0; index--) {
    for (let t = 0; t <= target; t++) {
      let include = false;
      if (t - nums[index] >= 0) {
        include = dp[index + 1][t - nums[index]]; // solve(nums, index + 1, target - nums[index]);
      }
      let exclude = dp[index + 1][t]; // solve(nums, index + 1, target); //

      dp[index][t] = include || exclude;
    }
  }

  return dp[0][target];
};

// Space optimization
var canPartition = function (nums) {
  let sum = nums.reduce((total, curr) => total + curr, 0);
  let isEven = sum % 2 == 0;
  if (!isEven) return false;

  let target = sum / 2;

  // Step 1: Initialization
  //   let dp = Array(nums.length + 1)
  //     .fill()
  //     .map(() => Array(target + 1).fill(false));

  let curr = Array(nums.length + 1).fill(true);
  let next = Array(nums.length + 1).fill(false);

  // Base Case
  //   for (let row = 0; row <= nums.length; row++) {
  //     // For every row, if target (col) is zero set true
  //     // which is another way of saying if(target == 0) in the matrix ans is true.
  //     dp[row][0] = true;
  //   }

  // Step 2: Filling the Table
  for (let index = nums.length - 1; index >= 0; index--) {
    for (let t = 0; t <= target; t++) {
      let include = false;
      if (t - nums[index] >= 0) {
        include = next[t - nums[index]]; // solve(nums, index + 1, target - nums[index]);
      }
      let exclude = next[t]; // solve(nums, index + 1, target); //

      curr[t] = include || exclude;
    }

    next = curr;
  }

  return next[0];
};

// Space Optimization
var canPartition = function (nums) {
  let sum = nums.reduce((total, curr) => total + curr, 0);
  let isEven = sum % 2 === 0;
  if (!isEven) return false;

  let target = sum / 2;

  // Initialize two arrays for DP, representing current and next states
  let curr = new Array(target + 1).fill(false);
  let next = new Array(target + 1).fill(false);

  // Base case
  curr[0] = true;

  // Filling the Table
  for (let index = nums.length - 1; index >= 0; index--) {
    for (let t = 0; t <= target; t++) {
      // Check if including the current number is possible
      let include = false;
      if (t - nums[index] >= 0) {
        include = curr[t - nums[index]];
      }

      // Exclude the current number
      let exclude = curr[t];

      next[t] = include || exclude;
    }
    // Shift the arrays: next becomes curr, and curr is reset
    curr = [...next];
  }

  return curr[target];
};

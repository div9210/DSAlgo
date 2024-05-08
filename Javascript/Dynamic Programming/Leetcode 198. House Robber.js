/**
 * @param {number[]} nums
 * @return {number}
 */
function solve(nums, index, dp) {
  if (index >= nums.length) {
    return 0;
  }

  if (dp[index] != null) {
    // An answer already exists for this index
    // Which means we have already done the calculation for this index before
    return dp[index];
  }

  // Either include the index element or don't include it
  // 1. Including the nums[index]
  let inclusionRobbery = nums[index] + solve(nums, index + 2, dp);

  // 2. Exculding the nums[index]
  let exclusionRobbery = 0 + solve(nums, index + 1, dp);

  let maxRobbery = Math.max(inclusionRobbery, exclusionRobbery);
  dp[index] = maxRobbery;
  return dp[index];
}

var rob = function (nums) {
  let index = 0;
  // Since we are changing index
  // and index can move in 0 - nums.length range
  let dpArray = new Array(nums.length).fill(null);
  let maxRobbed = solve(nums, index, dpArray);
  return maxRobbed;
};

// Using Tablulation
function solveUsingTabulation(nums, dp) {
  let n = nums.length;
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return nums[0];
  }

  if (n == 2) {
    return Math.max(nums[0], nums[1]);
  }

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  let i = 2;
  while (i < n) {
    let inclusion = nums[i] + dp[i - 2];
    let exclusion = dp[i - 1];

    dp[i] = Math.max(inclusion, exclusion);
    i++;
  }

  return dp[n - 1];
}

var rob = function (nums) {
  // let index = 0;
  // Since we are changing index
  // and index can move in 0 - nums.length range
  let dpArray = new Array(nums.length).fill(null);
  // let maxRobbed = solve(nums, index, dpArray);
  let maxRobbed = solveUsingTabulation(nums, dpArray);
  return maxRobbed;
};

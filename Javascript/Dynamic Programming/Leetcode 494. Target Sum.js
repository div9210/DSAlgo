/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let n = nums.length;
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let dp = new Array(n + 1).fill().map(() => Array(sum + 1).fill(null));
  return solve(0, 0);
  function solve(index, t) {
    if (index == n) {
      // Either t is achieved or not achieved
      if (t == target) return 1;
      else return 0;
    }

    // Memoization check
    if (dp[index][t] != null) return dp[index][t];

    // Logic
    // There are 2 scenarios 
    // 1. if we add the current num
    let tryAdd = solve(index + 1, t + nums[index]);
    //2. if we subtract the current num
    let trySub = solve(index + 1, t - nums[index]);

    return dp[index][t] = tryAdd + trySub;
  }
};

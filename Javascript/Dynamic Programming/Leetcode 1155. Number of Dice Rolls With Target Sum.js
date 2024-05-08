/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const MOD = 1e9 + 7;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(target + 1).fill(-1));
  let ans = solve(n, k, target);
  return ans % MOD;

  function solve(n, k, target) {
    // Base Cases
    // Target Achieved
    if (n == 0 && target == 0) return 1;

    // Target Not Achieved
    if (n == 0 && target != 0) return 0;
    if (n != 0 && target == 0) return 0;

    // Check if dp already has the ans
    if (dp[n][target] != -1) {
      return dp[n][target];
    }

    // Exploring all face values of a dice
    let possibleSum = 0;
    for (let i = 1; i <= k; i++) {
      if (target - i >= 0) {
        // Since one dice is used, for next dice n will be one less
        possibleSum += solve(n - 1, k, target - i) % MOD;
      }
    }

    dp[n][target] = possibleSum;
    return dp[n][target];
  }
};

// TABULAR
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const MOD = 1e9 + 7;
  //   let dp = Array(n + 1)
  //     .fill()
  //     .map(() => Array(target + 1).fill(0));\
  let curr = Array(target + 1).fill(0);
  let next = Array(target + 1).fill(0);
  //   for (let row = 0; row < n + 1; row++) {
  //     // Fill column 0 i.e target 0 as 1 (Base Case)
  //     dp[row][0] = 1;
  //   }

  curr[0] = 1;

  for (let nIndex = 1; nIndex < n + 1; nIndex++) {
    for (let t = 0; t < target + 1; t++) {
      // Exploring all face values of a dice
      let possibleSum = 0;
      for (let i = 1; i <= k; i++) {
        if (t - i >= 0) {
          // Since one dice is used, for next dice n will be one less
          possibleSum += curr[t - i] % MOD; // solve(n - 1, k, target - i) % MOD;
        }
      }
      next[t] = possibleSum;
    }
    curr = next;
  }

  return curr[target] % MOD;
};

// Space Optimization
var numRollsToTarget = function (n, k, target) {
  const MOD = 1e9 + 7;
  //   let dp = Array(n + 1)
  //     .fill()
  //     .map(() => Array(target + 1).fill(0));\
  let curr = Array(target + 1).fill(0);
  let next = Array(target + 1).fill(0);

  // Base Case
  curr[0] = 1;

  for (let nIndex = 1; nIndex < n + 1; nIndex++) {
    for (let t = 0; t < target + 1; t++) {
      // Exploring all face values of a dice
      let possibleSum = 0;
      for (let i = 1; i <= k; i++) {
        if (t - i >= 0) {
          // Since one dice is used, for next dice n will be one less
          possibleSum += curr[t - i] % MOD; // solve(n - 1, k, target - i) % MOD;
        }
      }
      next[t] = possibleSum;
    }
    curr = [...next];
  }

  return curr[target] % MOD;
};

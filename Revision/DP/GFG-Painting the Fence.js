/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
  constructor() {
    this.MOD = 1e9 + 7;
  }
  // TABULAR
  countWays(n, k) {
    let dp = Array(n + 1).fill(null);
    // Base Cases
    dp[1] = k;
    dp[2] = k + k * (k - 1);

    for (let i = 3; i <= n; i++) {
      // dp[n] = ((k - 1) * (solve(n - 2, k, MOD) + solve(n - 1, k, MOD))) % MOD;
      dp[n] = ((k - 1) * (dp[n - 2] + dp[n - 1])) % this.MOD;
    }

    return dp[n];
  }
  countWays(n, k) {
    let dp = Array(n + 1).fill(null);
    return solve(n, k, this.MOD);

    function solve(n, k, MOD) {
      // base case
      if (n == 1) return k;

      if (n == 2) return k + k * (k - 1);

      // Check if dp has the ans for current value of n
      if (dp[n] != null) return dp[n];

      return (dp[n] =
        ((k - 1) * (solve(n - 2, k, MOD) + solve(n - 1, k, MOD))) % MOD);
    }
  }
}

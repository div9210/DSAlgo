// In order to understand the approach
// Check dp week doubt class with Lakshay Bhaiya and search for this question

// Recursive code of this question on GFG
// takes too much call stack, thus we need a tabular code for this
class Solution {
  countWays(n, k) {
    //base case
    const MOD = 1e9 + 7;
    let dp = Array(n + 1).fill(-1);
    let ways = solve(n, k);
    return ways;
    function solve(n, k) {
      if (n == 1) {
        return k;
      }
      if (n == 2) {
        return k + k * (k - 1);
      }

      // Check if dp has the ans
      if (dp[n] != -1) {
        return dp[n];
      }

      let ans = ((k - 1) * (solve(n - 1, k) + solve(n - 2, k))) % MOD;
      dp[n] = ans;
      return dp[n];
    }
  }
}

// Tabular
class Solution {
  countWays(n, k) {
    // base case
    const MOD = 1e9 + 7;
    let dp = Array(n + 1).fill(null);
    dp[1] = k;
    dp[2] = k + k * (k - 1);

    for (let i = 3; i <= n; i++) {
      dp[i] = ((k - 1) * (dp[i - 1] + dp[i - 2])) % MOD;
    }

    return dp[n] % MOD;
  }
}

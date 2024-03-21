// Recursion + Memoization
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // Applying 2D dp
    let maxtrixDp = Array(W + 1)
      .fill()
      .map(() => Array(n).fill(null));

    let index = 0;
    let ans = solve(W, wt, val, n, index);
    return ans;
    function solve(W, wt, val, n, index) {
      // Base Case
      if (index == n) {
        return 0;
      }

      // Check if answer already exists in dp
      if (maxtrixDp[W][index] != null) {
        return maxtrixDp[W][index];
      }

      // Find answers for include and exclude
      let include = 0;
      if (wt[index] <= W) {
        include = val[index] + solve(W - wt[index], wt, val, n, index + 1);
      }

      let exclude = 0 + solve(W, wt, val, n, index + 1);

      maxtrixDp[W][index] = Math.max(include, exclude);
      return maxtrixDp[W][index];
    }
  }
}

// Tabulation
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // Applying 2D dp
    let dp = Array(W + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));

    // Base Case
    for (let i = 0; i <= W; i++) {
      dp[i][n] = 0;
    }

    for (let i = 0; i <= W; i++) {
      for (let j = n - 1; j >= 0; j--) {
        // Find answers for include and exclude
        let include = 0;
        if (wt[j] <= i) {
          include = val[j] + dp[i - wt[j]][j + 1];
        }

        let exclude = dp[i][j + 1];

        dp[i][j] = Math.max(include, exclude);
      }
    }

    return dp[W][0];
  }
}

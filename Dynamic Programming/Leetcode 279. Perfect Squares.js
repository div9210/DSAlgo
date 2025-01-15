/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = Array(n + 1).fill(null);
  let minSquares = solve(n);
  return minSquares;
  function solve(n) {
    if (n <= 0) return 0;

    // check if dp has the answer already
    if (dp[n] != null) {
      return dp[n];
    }

    // Check all the perfect squares
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      ans = Math.min(ans, 1 + solve(n - i * i));
    }

    dp[n] = ans;
    return dp[n];
  }
};

// Tabular
var numSquares = function (n) {
  let dp = Array(n + 1).fill(null);
  // Base Case
  dp[0] = 0;
  for (let nIndex = 1; nIndex <= n; nIndex++) {
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      ans = Math.min(ans, 1 + dp[nIndex - i * i] || 0); // Math.min(ans, 1 + solve(nIndex - i * i));
    }

    dp[nIndex] = ans;
  }

  return dp[n];
};

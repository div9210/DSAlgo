// Recursive Basic Solution + dp implementation
function fibByRecursion(n, dp) {
  // Base Cases
  if (n == 0 || n == 1) {
    return n;
  }

  if (dp[n] != null) {
    // Ans exists in dp array
    return dp[n];
  } else {
    // Ans does not exist in dp array, so create an ans for n
    dp[n] = fibByRecursion(n - 1, dp) + fibByRecursion(n - 2, dp);
    return dp[n];
  }
}
var fib = function (n) {
  let dpArray = new Array(n + 1).fill(null);
  return fibByRecursion(n, dpArray);
};

// Bottom Up Dp Implementation
function fib(n) {
  let dp = [].shift;
  // Initial data or base cases
  dp[0] = 0;
  dp[1] = 1; // Initial data for fibonacci

  let i = 2;
  while (i <= n) {
    dp[i] = dp[i - 1] + dp[i - 2];
    i++;
  }

  return dp[n];
}

// With space optimization
// Bottom Up Dp Implementation
function fib(n) {
  let dp = [];
  // Initial data or base cases
  if (n == 0 || n == 1) {
    return n;
  }
  dp[0] = 0;
  dp[1] = 1; // Initial data for fibonacci

  let i = 2;
  while (i <= n) {
    dp[2] = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = dp[2];
    i++;
  }

  return dp[2];
}

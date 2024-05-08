/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  // Define the range
  let start = 1;
  let end = n;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(-1));
  let minMoneyToWin = solve(start, end);
  return minMoneyToWin;

  function solve(start, end) {
    if (start >= end) {
      // If start exceeds the end i.e invalid
      // just return and consider 0 penalty

      // If start == end, that means there is only one number to choose
      // Thus we cannot be wrong. Since we cannot be wrong consider 0 penalty
      return 0;
    }

    // Check if dp has the answer already
    if (dp[start][end] != -1) {
      return dp[start][end];
    }

    // Since the ans has to be the minimum
    let minMoney = Number.MAX_SAFE_INTEGER;
    // Now between the range of start and end
    // Consider every number as a guess

    for (let i = start; i <= end; i++) {
      // For the worst case we will believe that our guess is 100% wrong
      // Calculate the ans if we choose i as our first guess
      // Since we know beforehand that i is wrong
      // Thus we will be charged i rupees as penalty
      // thus adding i (as penalty) in the max of left range ans and right range ans
      let ansOnChoosingI = i + Math.max(solve(start, i - 1), solve(i + 1, end));

      minMoney = Math.min(minMoney, ansOnChoosingI);
    }

    dp[start][end] = minMoney;
    return dp[start][end];
  }
};

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  let dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Use oppsite loops
  // So for 1 - n use loop n - 1
  for (let start = n; start >= 1; start--) {
    for (let end = 1; end <= n; end++) {
      if (start >= end) {
        continue;
      }

      // Since the ans has to be the minimum
      let minMoney = Number.MAX_SAFE_INTEGER;
      // Now between the range of start and end
      // Consider every number as a guess

      for (let i = start; i <= end; i++) {
        // For the worst case we will believe that our guess is 100% wrong
        // Calculate the ans if we choose i as our first guess
        // Since we know beforehand that i is wrong
        // Thus we will be charged i rupees as penalty
        // thus adding i (as penalty) in the max of left range ans and right range ans
        let ansOnChoosingI = i + Math.max(dp[start][i - 1], dp[i + 1][end]); // here we have dp[i+1] and i = start || n that means n+1, which is invalid in dp of n+1 by n+1, thus we made dp of n+2, n+1

        minMoney = Math.min(minMoney, ansOnChoosingI);
        dp[start][end] = minMoney;
      }
    }
  }

  return dp[1][n];
};

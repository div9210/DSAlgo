/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let startIndex1 = 0;
  let startIndex2 = 1;
  let dp = Array(cost.length).fill(null);
  return Math.min(solve(startIndex1), solve(startIndex2));

  function solve(index) {
    if (index >= cost.length) {
      return 0;
    }

    if (dp[index] != null) return dp[index];

    let costAfter1Jump = cost[index] + solve(index + 1);
    let costAfter2Jumps = cost[index] + solve(index + 2);

    return (dp[index] = Math.min(costAfter1Jump, costAfter2Jumps));
  }
};

// trying tabular
// var minCostClimbingStairs = function (cost) {
//     let n = cost.length;
//     let dp = new Array(n).fill(0);

//     // Base cases
//     dp[0] = cost[0];
//     dp[1] = cost[1];

//     // Fill the dp array bottom-up
//     for (let i = 2; i < n; i++) {
//         dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
//     }

//     // The minimum cost to reach the top is the minimum of the last two elements
//     return Math.min(dp[n - 1], dp[n - 2]);
// }

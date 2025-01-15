/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxCoins = function (nums) {
//     // Reverse Engineering the solution
//     // Since all the sub problems are interdependent
//     // You cannot start bursting balloons and check in end
//     // Hence we can start from the last balloon burst
//     // And treat each balloon as the last one to burst and bottom up our solution
//     let balloons = [1, ...nums, 1]; // Added Hypothetical Balloons;
//     let memo = Array(balloons.length).fill().map(() => Array(balloons.length).fill(-1));

//     return solve(1, balloons.length - 2);

//     function solve(start, end) {
//         if (start > end) return 0; // No coins added

//         if(memo[start][end] != -1) return memo[start][end];

//         // Treat each balloon as the last one to burst
//         let maxCoins = 0;
//         for (let i = start; i <= end; i++) {
//             let coinsCollected = (balloons[start - 1] * balloons[i] * balloons[end + 1]) + solve(start, i - 1) + solve(i + 1, end);
//             maxCoins = Math.max(maxCoins, coinsCollected);
//         }

//         return memo[start][end] = maxCoins;
//     }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // Reverse Engineering the solution
  // Since all the sub problems are interdependent
  // You cannot start bursting balloons and check in end
  // Hence we can start from the last balloon burst
  // And treat each balloon as the last one to burst and bottom up our solution

  // Added Hypothetical Balloons
  let balloons = [1, ...nums, 1];

  // Create a memoization table to store already computed results
  let dp = Array(balloons.length)
    .fill()
    .map(() => Array(balloons.length).fill(0));

  let n = balloons.length - 2;

  // Earlier we were visiting start from 1 to n
  for (let start = n; start >= 1; start--) {
    for (let end = 1; end <= n; end++) {
      let maxCoins = 0;
      for (let i = start; i <= end; i++) {
        let coinsCollected =
          balloons[start - 1] * balloons[i] * balloons[end + 1] +
          dp[start][i - 1] + // solve(start, i - 1)
          dp[i + 1][end]; // solve(i + 1, end);
        maxCoins = Math.max(maxCoins, coinsCollected);
      }

      dp[start][end] = maxCoins;
    }
  }

  // Return the maximum coins collected
  return dp[1][n];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let n = prices.length;
//     let dp = Array(n + 1).fill().map(() => Array(2).fill(null));
//     return solve(0, 1);

//     function solve(index, canBuy) {
//         if (index >= n) return 0;

//         if (dp[index][canBuy] != null) return dp[index][canBuy];
//         // Either you can buy or not
//         let maxProfit = 0;
//         if (canBuy) {
//             // Buy the stock
//             let profitOnBuying = -prices[index] + solve(index + 1, 0);
//             // Ignore this stock and move further
//             let profitOnIgnoringToBuy = 0 + solve(index + 1, 1);

//             maxProfit = Math.max(profitOnBuying, profitOnIgnoringToBuy);
//         } else {
//             // Sell the stock
//             let profitOnSelling = prices[index] + solve(index + 1, 1);
//             // Ignore selling at current day
//             let profitOnIgnoringToSell = 0 + solve(index + 1, 0);

//             maxProfit = Math.max(profitOnSelling, profitOnIgnoringToSell);
//         }

//         return dp[index][canBuy] = maxProfit;
//     }
// };

var maxProfit = function (prices) {
  let n = prices.length;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(2).fill(0));

  dp[n][1] = 0;
  dp[n][0] = 0;

  for (let index = n - 1; index >= 0; index--) {
    for (let canBuy = 0; canBuy <= 1; canBuy++) {
      // Either you can buy or not
      let maxProfit = 0;
      if (canBuy) {
        // Buy the stock
        let profitOnBuying = -prices[index] + dp[index + 1][0]; // solve(index + 1, 0);
        // Ignore this stock and move further
        let profitOnIgnoringToBuy = 0 + dp[index + 1][1]; // solve(index + 1, 1);

        maxProfit = Math.max(profitOnBuying, profitOnIgnoringToBuy);
      } else {
        // Sell the stock
        let profitOnSelling = prices[index] + dp[index + 1][1]; // solve(index + 1, 1);
        // Ignore selling at current day
        let profitOnIgnoringToSell = 0 + dp[index + 1][0]; // solve(index + 1, 0);

        maxProfit = Math.max(profitOnSelling, profitOnIgnoringToSell);
      }

      dp[index][canBuy] = maxProfit;
    }
  }

  return dp[0][1];
};

// Space Optimization
var maxProfit = function (prices) {
  let n = prices.length;
  //   let dp = Array(n + 1)
  //     .fill()
  //     .map(() => Array(2).fill(0));

  let next = Array(2).fill(0);
  let curr = Array(2).fill(0);

  next[1] = 0;
  next[0] = 0;

  for (let index = n - 1; index >= 0; index--) {
    for (let canBuy = 0; canBuy <= 1; canBuy++) {
      // Either you can buy or not
      let maxProfit = 0;
      if (canBuy) {
        // Buy the stock
        let profitOnBuying = -prices[index] + next[0]; // solve(index + 1, 0);
        // Ignore this stock and move further
        let profitOnIgnoringToBuy = 0 + next[1]; // solve(index + 1, 1);

        maxProfit = Math.max(profitOnBuying, profitOnIgnoringToBuy);
      } else {
        // Sell the stock
        let profitOnSelling = prices[index] + next[1]; // solve(index + 1, 1);
        // Ignore selling at current day
        let profitOnIgnoringToSell = 0 + next[0]; // solve(index + 1, 0);

        maxProfit = Math.max(profitOnSelling, profitOnIgnoringToSell);
      }

      curr[canBuy] = maxProfit;
    }

    next = [...curr];
  }

  return curr[1];
};

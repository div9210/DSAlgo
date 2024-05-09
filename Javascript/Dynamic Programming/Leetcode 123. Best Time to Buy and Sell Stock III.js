// var maxProfit = function (prices) {
//     let n = prices.length;
//     let dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(3).fill(null)));
//     return solve(0, 1, 2); // Start with 2 transactions available

//     function solve(index, canBuy, transactions) {
//         if (index >= n || transactions === 0) return 0; // Base case: If index exceeds array length or no transactions left, return 0
//         if (dp[index][canBuy][transactions] !== null) return dp[index][canBuy][transactions];

//         let maxProfit = 0;
//         if (canBuy) {
//             // Buy the stock
//             let profitOnBuying = -prices[index] + solve(index + 1, 0, transactions);
//             // Ignore this stock and move further
//             let profitOnIgnoringToBuy = 0 + solve(index + 1, 1, transactions);
//             maxProfit = Math.max(profitOnBuying, profitOnIgnoringToBuy);
//         } else {
//             // Sell the stock
//             let profitOnSelling = prices[index] + solve(index + 1, 1, transactions - 1);
//             // Ignore selling at current day
//             let profitOnIgnoringToSell = 0 + solve(index + 1, 0, transactions);
//             maxProfit = Math.max(profitOnSelling, profitOnIgnoringToSell);
//         }

//         return dp[index][canBuy][transactions] = maxProfit;
//     }
// };

// var maxProfit = function (prices) {
//     let n = prices.length;
//     let dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(3).fill(null)));

//     // Base Case : index is n and transactions are 0 and canBuy can be anything -> [0, 1]
//     dp[n][1][0] = 0;
//     dp[n][0][0] = 0;

//     for (let index = n - 1; index >= 0; index--) {
//         for (let canBuy = 0; canBuy <= 1; canBuy++) {
//             for (let transactions = 1; transactions <= 2; transactions++) {
//                 let maxProfit = 0;
//                 if (canBuy) {
//                     // Buy the stock
//                     let profitOnBuying = -prices[index] + dp[index + 1][0][transactions]; // solve(index + 1, 0, transactions);
//                     // Ignore this stock and move further
//                     let profitOnIgnoringToBuy = 0 + dp[index + 1][1][transactions]; // solve(index + 1, 1, transactions);
//                     maxProfit = Math.max(profitOnBuying, profitOnIgnoringToBuy);
//                 } else {
//                     // Sell the stock
//                     let profitOnSelling = prices[index] + dp[index + 1][1][transactions - 1]; // solve(index + 1, 1, transactions - 1);
//                     // Ignore selling at current day
//                     let profitOnIgnoringToSell = 0 + dp[index + 1][0][transactions]; // solve(index + 1, 0, transactions);
//                     maxProfit = Math.max(profitOnSelling, profitOnIgnoringToSell);
//                 }

//                  dp[index][canBuy][transactions] = maxProfit;
//             }
//         }
//     }

//     return dp[0][1][2];
// }

var maxProfit = function (prices) {
    let n = prices.length;
    // let dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(3).fill(null)));
    let next = Array(2).fill().map(() => Array(3).fill(null)); // index + 1
    let curr = Array(2).fill().map(() => Array(3).fill(null)); // index

    // Base Case : index is n and transactions are 0 and canBuy can be anything -> [0, 1]
    next[1][0] = 0;
    next[0][0] = 0;

    for (let index = n - 1; index >= 0; index--) {
        for (let canBuy = 0; canBuy <= 1; canBuy++) {
            for (let transactions = 1; transactions <= 2; transactions++) {
                let maxProfit = 0;
                if (canBuy) {
                    // Buy the stock
                    let profitOnBuying = -prices[index] + next[0][transactions]; // solve(index + 1, 0, transactions);
                    // Ignore this stock and move further
                    let profitOnIgnoringToBuy = 0 + next[1][transactions]; // solve(index + 1, 1, transactions);
                    maxProfit = Math.max(profitOnBuying, profitOnIgnoringToBuy);
                } else {
                    // Sell the stock
                    let profitOnSelling = prices[index] + next[1][transactions - 1]; // solve(index + 1, 1, transactions - 1);
                    // Ignore selling at current day
                    let profitOnIgnoringToSell = 0 + next[0][transactions]; // solve(index + 1, 0, transactions);
                    maxProfit = Math.max(profitOnSelling, profitOnIgnoringToSell);
                }

                 curr[canBuy][transactions] = maxProfit;
            }
        }
        next = [...curr];
    }

    return curr[1][2];
}

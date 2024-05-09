/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (k, prices) {
//     let n = prices.length;
//     let dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(k + 1).fill(null)));
//     return solve(0, 1, k);

//     function solve(index, canBuy, remainingTransactions) {
//         if (index == n || remainingTransactions == 0) return 0;

//         if (dp[index][canBuy][remainingTransactions] != null) return dp[index][canBuy][remainingTransactions];

//         let maxProfit = 0;
//         if (canBuy) {
//             let buyTheStock = -prices[index] + solve(index + 1, 0, remainingTransactions);
//             let ignoreBuying = 0 + solve(index + 1, 1, remainingTransactions);
//             maxProfit = Math.max(buyTheStock, ignoreBuying);
//         } else {
//             let sellTheStock = prices[index] + solve(index + 1, 1, remainingTransactions - 1);
//             let ignoreSelling = 0 + solve(index + 1, 0, remainingTransactions);
//             maxProfit = Math.max(sellTheStock, ignoreSelling);
//         }

//         return dp[index][canBuy][remainingTransactions] = maxProfit;
//     }
// };

// var maxProfit = function (k, prices) {
//     let n = prices.length;
//     let dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(k + 1).fill(null)));

//     dp[n][0][0] = 0;
//     dp[n][1][0] = 0;

//     for (let index = n - 1; index >= 0; index--) {
//         for (let canBuy = 0; canBuy <= 1; canBuy++) {
//             for (let remainingTransactions = 1; remainingTransactions <= k; remainingTransactions++) {
//                 let maxProfit = 0;
//                 if (canBuy) {
//                     let buyTheStock = -prices[index] + dp[index + 1][0][remainingTransactions]; // solve(index + 1, 0, remainingTransactions);
//                     let ignoreBuying = 0 + dp[index + 1][1][remainingTransactions]; // solve(index + 1, 1, remainingTransactions);
//                     maxProfit = Math.max(buyTheStock, ignoreBuying);
//                 } else {
//                     let sellTheStock = prices[index] + dp[index + 1][1][remainingTransactions - 1]; // solve(index + 1, 1, remainingTransactions - 1);
//                     let ignoreSelling = 0 + dp[index + 1][0][remainingTransactions]; // solve(index + 1, 0, remainingTransactions);
//                     maxProfit = Math.max(sellTheStock, ignoreSelling);
//                 }

//                 dp[index][canBuy][remainingTransactions] = maxProfit;
//             }
//         }
//     }

//     return dp[0][1][k];
// }


var maxProfit = function (k, prices) {
    let n = prices.length;
    // let dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(k + 1).fill(null)));
    let next =  Array(2).fill().map(() => Array(k + 1).fill(null));
    let curr =  Array(2).fill().map(() => Array(k + 1).fill(null));

    next[0][0] = 0;
    next[1][0] = 0;

    for (let index = n - 1; index >= 0; index--) {
        for (let canBuy = 0; canBuy <= 1; canBuy++) {
            for (let remainingTransactions = 1; remainingTransactions <= k; remainingTransactions++) {
                let maxProfit = 0;
                if (canBuy) {
                    let buyTheStock = -prices[index] + next[0][remainingTransactions]; // solve(index + 1, 0, remainingTransactions);
                    let ignoreBuying = 0 + next[1][remainingTransactions]; // solve(index + 1, 1, remainingTransactions);
                    maxProfit = Math.max(buyTheStock, ignoreBuying);
                } else {
                    let sellTheStock = prices[index] + next[1][remainingTransactions - 1]; // solve(index + 1, 1, remainingTransactions - 1);
                    let ignoreSelling = 0 + next[0][remainingTransactions]; // solve(index + 1, 0, remainingTransactions);
                    maxProfit = Math.max(sellTheStock, ignoreSelling);
                }

                curr[canBuy][remainingTransactions] = maxProfit;
            }
        }

        next = [...curr];
    }

    return curr[1][k];
}
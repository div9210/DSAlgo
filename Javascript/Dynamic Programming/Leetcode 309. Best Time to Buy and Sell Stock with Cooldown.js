/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array(n + 1).fill().map(() => Array(2).fill(null)); // memoization
    return solve(0, 1);

    function solve(index, canBuy) {
        // Base Cases
        if (index >= n) return 0;

        if (dp[index][canBuy] != null) return dp[index][canBuy];

        // Logic
        let maxProfit = 0;
        if (canBuy) {
            let buyTheStock = -prices[index] + solve(index + 1, 0);
            let ignoreBuying = 0 + solve(index + 1, 1);
            maxProfit = Math.max(buyTheStock, ignoreBuying);
        } else {
            let sellTheStock = prices[index] + solve(index + 2, 1) // Because of the cooldown we did not move to the next day
            // i.e i + 1 rather we jumped to the next day of tomorrow i.e index + 2
            let ignoreSelling = 0 + solve(index + 1, 0);
            maxProfit = Math.max(sellTheStock, ignoreSelling);
        }

        return dp[index][canBuy] = maxProfit;
    }
};

// Tabular
// var maxProfit = function (prices) {
//     let n = prices.length;
//     let dp = Array(n + 1).fill().map(() => Array(2).fill(null));

//     // Base Cases
//     dp[n][0] = 0;
//     dp[n][1] = 0;

//     for (let index = n - 1; index >= 0; index--) {
//         for (let canBuy = 0; canBuy <= 1; canBuy++) {
//             // Logic
//             let maxProfit = 0;
//             if (canBuy) {
//                 let buyTheStock = -prices[index] + dp[index + 1][0]; // solve(index + 1, 0);
//                 let ignoreBuying = 0 + dp[index + 1][1]; // solve(index + 1, 1);
//                 maxProfit = Math.max(buyTheStock, ignoreBuying);
//             } else {
//                 let sellTheStock = prices[index] + (index + 2 <= n ? dp[index + 2][1] : 0); // solve(index + 2, 1) // Because of the cooldown we did not move to the next day
//                 // i.e i + 1 rather we jumped to the next day of tomorrow i.e index + 2
//                 let ignoreSelling = 0 + dp[index + 1][0]; // solve(index + 1, 0);
//                 maxProfit = Math.max(sellTheStock, ignoreSelling);
//             }

//             dp[index][canBuy] = maxProfit;
//         }
//     }

//     return dp[0][1];
// }

var maxProfit = function (prices) {
    let n = prices.length;
    // let dp = Array(n + 1).fill().map(() => Array(2).fill(null));
    let superNext = Array(2).fill(null);
    let next = Array(2).fill(null);
    let curr = Array(2).fill(null);

    // Base Cases
    next[0] = 0;
    next[1] = 0;

    for (let index = n - 1; index >= 0; index--) {
        for (let canBuy = 0; canBuy <= 1; canBuy++) {
            // Logic
            let maxProfit = 0;
            if (canBuy) {
                let buyTheStock = -prices[index] + next[0]; // solve(index + 1, 0);
                let ignoreBuying = 0 + next[1]; // solve(index + 1, 1);
                maxProfit = Math.max(buyTheStock, ignoreBuying);
            } else {
                let sellTheStock = prices[index] + (index + 2 <= n ? superNext[1] : 0); // solve(index + 2, 1) // Because of the cooldown we did not move to the next day
                // i.e i + 1 rather we jumped to the next day of tomorrow i.e index + 2
                let ignoreSelling = 0 + next[0]; // solve(index + 1, 0);
                maxProfit = Math.max(sellTheStock, ignoreSelling);
            }

            curr[canBuy] = maxProfit;
        }
        superNext = [...next];
        next = [...curr];
    }

    return curr[1];
}
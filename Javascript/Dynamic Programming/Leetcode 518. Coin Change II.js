/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let n = coins.length;
    let dp = Array(amount + 1).fill().map(() => Array(n + 1).fill(null));
    return solve(0, 0);

    function solve(currentAmount, index) {
        if (currentAmount === amount) {
            return 1;
        }

        if (currentAmount > amount || index >= coins.length) {
            return 0;
        }

        if (dp[currentAmount][index] != null) return dp[currentAmount][index];

        // Include the current coin and continue recursion
        const includeCurrent = solve(currentAmount + coins[index], index);

        // Skip the current coin and continue recursion
        const excludeCurrent = solve(currentAmount, index + 1);

        return dp[currentAmount][index] = includeCurrent + excludeCurrent;
    }
};

var change = function (amount, coins) {
    let n = coins.length;
    let dp = Array(amount + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 0; i < n + 1; i++) {
        dp[amount][i] = 1;
    }

    for (let index = n - 1; index >= 0; index--) {
        for (let currentAmount = amount; currentAmount >= 0; currentAmount--) {
            // Include the current coin and continue recursion
            let includeCurrent = 0;
            if (currentAmount + coins[index] <= amount) {
                includeCurrent = dp[currentAmount + coins[index]][index];  // solve(currentAmount + coins[index], index);
            }

            // Skip the current coin and continue recursion
            const excludeCurrent = dp[currentAmount][index+1]; // solve(currentAmount, index + 1);

             dp[currentAmount][index] = includeCurrent + excludeCurrent;
        }
    }

    return dp[0][0];
}

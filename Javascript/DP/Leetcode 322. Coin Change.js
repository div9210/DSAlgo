/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

function coinChangeByTablulation(coins, amount) {
  let dp = new Array(amount + 1).fill(null);
  dp[0] = 0;

  // Since dp[0] is done, start from 1
  let currentAmount = 1;
  while (currentAmount <= amount) {
    let mini = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      let coinValue = coins[i];
      if (currentAmount - coinValue < 0) {
        // Invalid coin
        continue;
      }

      // If code reached here, that means the coin was valid
      let recursiveAns = dp[currentAmount - coinValue];
      if (recursiveAns != Number.MAX_SAFE_INTEGER)
        mini = Math.min(mini, recursiveAns + 1);
    }

    dp[currentAmount] = mini;
    currentAmount++;
  }

  return dp[amount] == Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}

function coinChangeDp(coins, amount, dp) {
  if (amount == 0) return 0;

  // Check in dp
  if (dp[amount] != null) {
    return dp[amount];
  }

  // Find out the solution for each case
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = coins.length - 1; i >= 0; i--) {
    // If taking the current coin amount from amount
    // does not make it invalid only then make the recursive call
    if (amount - coins[i] < 0) {
      continue;
    }

    // If code reaches here that means current coin is valid
    let recursiveAns = coinChangeDp(coins, amount - coins[i], dp);
    if (recursiveAns != -1) min = Math.min(min, 1 + recursiveAns); // Adding one in the used coins since current coin is used
  }

  let minCoins = min == Number.MAX_SAFE_INTEGER ? -1 : min;
  dp[amount] = minCoins;
  return minCoins;
}

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(null);
  let solveByDP = coinChangeDp(coins, amount, dp);
  return solveByDP;
};

let coins = [2];
amount = 3;

console.log(coinChange(coins, amount));

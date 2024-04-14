/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
 */

class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // W - capacity

    // Applying DP
    // Since the currIndex & capacity is changing here
    let dp = Array(n + 1)
      .fill()
      .map(() => Array(W));

    let currIndex = 0;
    let maxPick = solve(W, wt, val, currIndex, n);
    return maxPick;

    function solve(capacity, weights, values, currIndex, n) {
      // Base Case
      if (currIndex >= n) return 0; // Cannot pick anything

      // Check if dp has the ans
      if (dp[currIndex][capacity] != null) {
        return dp[currIndex][capacity];
      }

      let includeItem = 0;
      // Check if we can include the current item
      // If the capacity allows us to do that
      if (capacity >= weights[currIndex]) {
        // Include the current item's value
        includeItem =
          values[currIndex] +
          solve(
            capacity - weights[currIndex],
            weights,
            values,
            currIndex + 1,
            n
          );
      }

      // Do the same for exclusion of the currentItem
      let excludeItem = 0 + solve(capacity, weights, values, currIndex + 1, n);

      return (dp[currIndex][capacity] = Math.max(includeItem, excludeItem));
    }
  }
}

class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // W - capacity

    // Applying DP
    // Since the currIndex & capacity is changing here
    let dp = Array(n + 1)
      .fill()
      .map(() => Array(W));

    // Base Case
    // For n index any capacity holds the value 0
    for (let capacity = 0; capacity <= W; capacity++) {
      dp[n][capacity] = 0;
    }

    for (let currIndex = n - 1; currIndex >= 0; currIndex--) {
      for (let cap = 0; cap <= W; cap++) {
        let includeItem = 0;
        // Check if we can include the current item
        // If the capacity allows us to do that
        if (cap >= wt[currIndex]) {
          // Include the current item's value
          includeItem = val[currIndex] + dp[currIndex + 1][cap - wt[currIndex]];
          // solve(
          //   capacity - weights[currIndex],
          //   weights,
          //   values,
          //   currIndex + 1,
          //   n
          // );
        }

        // Do the same for exclusion of the currentItem
        let excludeItem = 0 + dp[currIndex + 1][cap];
        //   solve(capacity, weights, values, currIndex + 1, n);

        dp[currIndex][cap] = Math.max(includeItem, excludeItem);
      }
    }

    return dp[0][W];

    // ---------------------------------------------------------------------
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  // Pre computation of max for each range possible
  let maxComputation = new Map();
  for (let i = 0; i < arr.length; i++) {
    // For i to i range, max is arr[i]
    maxComputation.set(JSON.stringify([i, i]), arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      maxComputation.set(
        JSON.stringify([i, j]),
        Math.max(arr[j], maxComputation.get(JSON.stringify([i, j - 1])))
      );
    }
  }

  let n = arr.length;
  let start = 0;
  let end = n - 1;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(-1));
  let finalMinCost = solve(arr, maxComputation, start, end);
  return finalMinCost;

  function solve(arr, maxi, s, e) {
    if (s >= e) {
      return 0;
    }

    // Check if dp has the answer
    if (dp[s][e] != -1) {
      return dp[s][e];
    }

    // Do partitioning
    let minCost = Number.MAX_SAFE_INTEGER;
    for (let i = s; i < e; i++) {
      let maxLeft = maxi.get(JSON.stringify([s, i]));
      let maxRight = maxi.get(JSON.stringify([i + 1, e]));
      minCost = Math.min(
        minCost,
        maxLeft * maxRight + solve(arr, maxi, s, i) + solve(arr, maxi, i + 1, e)
      );
    }

    dp[s][e] = minCost;
    return dp[s][e];
  }
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let n = arr.length;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(-1));

  for (let s_index = n; s_index >= 0; s_index--) {
    for (let e_index = 0; e_index <= n; e_index++) {
      if (s_index >= e_index) {
        continue;
      }

      // Do partitioning
      let minCost = Number.MAX_SAFE_INTEGER;
      for (let i = s_index; i < e_index; i++) {
        let maxLeft = maxi.get(JSON.stringify([s_index, i]));
        let maxRight = maxi.get(JSON.stringify([i + 1, e_index]));
        minCost = Math.min(
          minCost,
          maxLeft * maxRight +
            solve(arr, maxi, s_index, i) +
            solve(arr, maxi, i + 1, e_index)
        );
      }

      dp[s_index][e_index] = minCost;
    }
  }

  return dp[0][n];
};

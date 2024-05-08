/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  let startIndex = 0;
  let M = 1;
  let isItAliceTurn = true;
  let dp = Array(piles.length + 1)
    .fill()
    .map(() =>
      Array(piles.length + 1)
        .fill()
        .map(() => Array(2).fill(0))
    );
  let maxByAlice = solve(piles, startIndex, M, isItAliceTurn);
  return maxByAlice;

  function solve(piles, index, M, isItAliceTurn) {
    if (index >= piles.length) {
      // Out of bound
      return 0;
    }

    if (dp[index][M][isItAliceTurn] != null) return dp[index];

    let maxByAlice = isItAliceTurn
      ? Number.MIN_SAFE_INTEGER
      : Number.MAX_SAFE_INTEGER;
    let currentTotal = 0;
    // We can pick X piles, and X moves in the range of [1, 2M]
    // Let X be every single number in the range
    for (let X = 1; X <= 2 * M; X++) {
      if (index + X - 1 >= piles.length) break;

      currentTotal += piles[index + X - 1];

      if (isItAliceTurn) {
        maxByAlice = Math.max(
          maxByAlice,
          currentTotal + solve(piles, index + X, Math.max(M, X), !isItAliceTurn)
        );
      } else {
        // Don't add the currentTotal
        // Since it's bob minimize the ans
        maxByAlice = Math.min(
          maxByAlice,
          solve(piles, index + X, Math.max(M, X), !isItAliceTurn)
        );
      }
    }

    dp[index][M][isItAliceTurn] = maxByAlice;
    return dp[index][M][isItAliceTurn];
  }
};

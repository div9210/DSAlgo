// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {number}
//  */
var numDistinct = function (s, t) {
  let dp = Array(s.length + 1)
    .fill()
    .map(() => Array(t.length + 1).fill(null));
  let distinctSubsq = solve(s, 0, t, 0);
  return distinctSubsq;

  function solve(s, i, t, j) {
    if (j >= t.length) return 1;
    if (i >= s.length) return 0;

    // Check if dp has the ans already
    if (dp[i][j] != null) {
      return dp[i][j];
    }
    let subsq = 0;
    if (s[i] == t[j]) {
      // Include the character in the subsequence matching
      subsq += solve(s, i + 1, t, j + 1);
    }

    // Also take one sequence for excluding the character
    subsq += solve(s, i + 1, t, j);

    dp[i][j] = subsq;
    return dp[i][j];
  }
};

// Tabular
var numDistinct = function (s, t) {
  let dp = Array(s.length + 1)
    .fill()
    .map(() => Array(t.length + 1).fill(0));

  // There are two base cases but we can ignore the 2nd
  // Since it requires to fill the ans with 0
  // And the whole array is already initialized with 0

  // Tackling the first base case
  for (let row = 0; row <= s.length; row++) {
    dp[row][t.length] = 1;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = t.length; j >= 0; j--) {
      let subsq = 0;
      if (s[i] == t[j]) {
        // Include the character in the subsequence matching
        subsq += dp[i + 1][j + 1];
      }

      // Also take one sequence for excluding the character
      subsq += dp[i + 1][j];

      dp[i][j] = subsq;
    }
  }

  return dp[0][0];
};

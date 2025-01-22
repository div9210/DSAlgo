/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let i = 0;
  let j = 0;
  let dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1).fill(null));
  let ans = solve(word1, word2, i, j);
  return ans;

  function solve(word1, word2, i, j) {
    // Base cases
    // If word1 is fully processed, remaining characters in word2 need to be inserted
    if (i === word1.length) return word2.length - j;

    // If word2 is fully processed, remaining characters in word1 need to be deleted
    if (j === word2.length) return word1.length - i;

    // Check if dp has the answer for current i and j
    if (dp[i][j] != null) {
      return dp[i][j];
    }

    if (word1[i] == word2[j]) {
      // Char Match
      dp[i][j] = solve(word1, word2, i + 1, j + 1);
    } else {
      let deleteCase = 1 + solve(word1, word2, i + 1, j);

      let replaceCase = 1 + solve(word1, word2, i + 1, j + 1);

      let insertCase = 1 + solve(word1, word2, i, j + 1);

      dp[i][j] = Math.min(deleteCase, replaceCase, insertCase);
    }

    return dp[i][j];
  }
};

// TABULAR
var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1).fill(0));

  for (let row = 0; row <= word1.length; row++) {
    // Fill every col word2.length + 1 with base case value
    dp[row][word2.length] = word1.length - row;
  }

  for (let col = 0; col <= word2.length; col++) {
    // Fill every col word2.length + 1 with base case value
    dp[word1.length][col] = word2.length - col;
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      if (word1[i] == word2[j]) {
        // Char Match
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        let deleteCase = 1 + dp[i + 1][j];

        let replaceCase = 1 + dp[i + 1][j + 1];

        let insertCase = 1 + dp[i][j + 1];

        dp[i][j] = Math.min(deleteCase, replaceCase, insertCase);
      }
    }
  }

  return dp[0][0];
};

// Tabular + Space Optimization
var minDistance = function (a, b) {
  // Need 2 1D Arrays
  let next = Array(a.length + 1).fill(0);
  let curr = Array(a.length + 1).fill(0);

  for (let row = 0; row <= a.length; row++) {
    // Fill every col word2.length + 1 with base case value
    next[row] = a.length - row;
  }

  for (let j = b.length - 1; j >= 0; j--) {
    curr[a.length] = b.length - j; // Imp Line

    for (let i = a.length - 1; i >= 0; i--) {
      if (a[i] == b[j]) {
        // Char Match
        curr[i] = next[i + 1];
      } else {
        let deleteCase = 1 + curr[i + 1];

        let replaceCase = 1 + next[i + 1];

        let insertCase = 1 + next[i];

        curr[i] = Math.min(deleteCase, replaceCase, insertCase);
      }
    }
    next = [...curr];
    curr = Array(a.length + 1).fill(0);
  }

  return next[0];
};

// Tabular + Row Wise Space optimization
var minDistance = function (a, b) {
  let curr = Array(a.length + 1).fill(0);
  let next = Array(a.length + 1).fill(0);

  for (let col = 0; col <= b.length; col++) {
    // Fill every col b.length + 1 with base case value
    next[col] = b.length - col;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    curr[b.length] = a.length - row;
    for (let j = b.length - 1; j >= 0; j--) {
      if (a[i] == b[j]) {
        // Char Match
        curr[j] = next[j + 1];
      } else {
        let deleteCase = 1 + next[j];

        let replaceCase = 1 + next[j + 1];

        let insertCase = 1 + curr[j + 1];

        curr[j] = Math.min(deleteCase, replaceCase, insertCase);
      }
    }

    next = [...curr];
    curr = Array(a.length + 1).fill(0);
  }

  return curr[0];
};

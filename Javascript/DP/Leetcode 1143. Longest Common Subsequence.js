var longestCommonSubsequence = function (text1, text2) {
  let i = 0;
  let j = 0;

  let matrixDp = Array(text1.length)
    .fill()
    .map(() => Array(text2.length).fill(null));

  let common = solve(text1, text2, i, j);
  return common;

  function solve(text1, text2, i, j) {
    // Base Case
    if (i >= text1.length || j >= text2.length) {
      return 0; // For out of bound there are 0 common characters
    }

    // Check if matrixDp already has the answer for i and j
    if (matrixDp[i][j] != null) {
      return matrixDp[i][j];
    }

    // If character match
    let common = 0;
    if (text1[i] == text2[j]) {
      common = 1 + solve(text1, text2, i + 1, j + 1);
    } else {
      // Case A : Leave from text1 and include character from text2
      let caseA = solve(text1, text2, i + 1, j);
      // Case B : Leave from text2 and include character from text1
      let caseB = (common = 0 + solve(text1, text2, i, j + 1));
      common = 0 + Math.max(caseA, caseB);
    }

    matrixDp[i][j] = common;
    return matrixDp[i][j];
  }
};

var longestCommonSubsequence = function (text1, text2) {
  let dp = Array(text1.length + 1)
    .fill()
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      // If character match
      let common = 0;
      if (text1[i] == text2[j]) {
        common = 1 + dp[i + 1][j + 1];
      } else {
        // Case A : Leave from text1 and include character from text2
        let caseA = dp[i + 1][j];
        // Case B : Leave from text2 and include character from text1
        let caseB = 0 + dp[i][j + 1];
        common = 0 + Math.max(caseA, caseB);
      }

      dp[i][j] = common;
    }
  }

  return dp[0][0];
};

var longestCommonSubsequence = function (text1, text2) {
  let next = Array(text1.length + 1).fill(0);
  let curr = Array(text1.length + 1).fill(0);

  for (let j = text2.length - 1; j >= 0; j--) {
    for (let i = text1.length - 1; i >= 0; i--) {
      // If character match
      let common = 0;
      if (text1[i] == text2[j]) {
        common = 1 + next[i + 1];
      } else {
        common = 0 + Math.max(curr[i + 1], next[i]);
      }
      curr[i] = common;
    }
    next = [...curr]; // Clone the curr array
  }

  return next[0];
};

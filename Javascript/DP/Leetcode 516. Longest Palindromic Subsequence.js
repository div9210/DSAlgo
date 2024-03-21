// Notes : This question depends on the leetcode 1143 in this folder
// So basically we want the longest common subsequence between the two string
// first the original string and second the reverse of the original string
var longestPalindromeSubseq = function (s) {
  let reveseStr = s.split("").reverse().join();
  let result = longestCommonSubsequence(s, reveseStr);
  return result;
};

// Code for longest common subsequence taken from leetcod e1143 solution
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

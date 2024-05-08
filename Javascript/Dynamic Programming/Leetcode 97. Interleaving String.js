/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let i = 0,
    j = 0,
    k = 0;
  let dp = Array(s1.length + 1)
    .fill()
    .map(() =>
      Array(s2.length + 1)
        .fill()
        .map(() => Array(s3.length + 1).fill(null))
    );

  return solve(i, j, k);

  function solve(i, j, k) {
    if (i >= s1.length && j >= s2.length && k >= s3.length) return true;

    if (dp[i][j][k] != null) return dp[i][j][k];

    let interleave = false;
    if (i < s1.length && s1[i] == s3[k]) {
      interleave = interleave || solve(i + 1, j, k + 1);
    }

    if (j < s2.length && s2[j] == s3[k]) {
      interleave = interleave || solve(i, j + 1, k + 1);
    }

    return (dp[i][j][k] = interleave);
  }
};

// var isInterleave = function (s1, s2, s3) {
//     let dp = Array(s1.length + 1)
//         .fill()
//         .map(() =>
//             Array(s2.length + 1)
//                 .fill()
//                 .map(() => Array(s3.length + 1).fill(false))
//         );

//     // Base Case
//     dp[s1.length][s2.length][s3.length] = true;

//     for (let i = s1.length; i >= 0; i--) {
//         for (let j = s2.length; j >= 0; j--) {
//             for (let k = s3.length; k >= 0; k--) {
//                 if (i >= s1.length && j >= s2.length && k >= s3.length) continue;

//                 let interleave = false;
//                 if (i < s1.length && s1[i] == s3[k]) {
//                     interleave = interleave || dp[i + 1][j][k + 1]// solve(i + 1, j, k + 1);
//                 }

//                 if (j < s2.length && s2[j] == s3[k]) {
//                     interleave = interleave || dp[i][j + 1][k + 1]// solve(i, j + 1, k + 1);
//                 }

//                 dp[i][j][k] = interleave;
//             }
//         }
//     }

//     return dp[0][0][0];
// }

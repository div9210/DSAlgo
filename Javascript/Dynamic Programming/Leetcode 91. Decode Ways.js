// var numDecodings = function (s) {
//     let dp = new Array(s.length).fill(-1);
//     return solve(0);

//     function solve(index) {
//         if (index === s.length) return 1; // Reached end of string, return 1 to indicate a valid decoding
//         if (s[index] === '0') return 0; // If current digit is '0', it can't be decoded alone

//         if (dp[index] !== -1) return dp[index]; // Return dp result if available

//         let ways = 0;
//         // Decode single digit
//         ways += solve(index + 1);

//         // Decode two digits if possible
//         if (index + 1 < s.length && parseInt(s.slice(index, index + 2)) <= 26) {
//             ways += solve(index + 2);
//         }

//         return dp[index] = ways; // store the result
//     }
// };

var numDecodings = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[n] = 1; // Base case: empty string has one valid decoding

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      dp[i] = 0; // Current digit is '0', no valid decoding possible
      continue;
    }
    dp[i] += dp[i + 1]; // Decoding single digit

    // Decoding two digits if possible
    if (i + 1 < n && parseInt(s.slice(i, i + 2)) <= 26) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0]; // Return the total number of valid decodings
};

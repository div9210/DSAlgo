// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
var wordBreak = function (s, wordDict) {
  let dp = Array(s.length + 1).fill(null);
  let partOfDict = solve(s, wordDict, 0);
  return partOfDict;

  function solve(s, wordDict, start) {
    if (start >= s.length) return true;

    // Check dp
    if (dp[start] != null) return dp[start];

    let word = "";
    let ans = false;
    for (let i = start; i < s.length; i++) {
      word += s[i];
      // Find the word in wordDict
      let isExists = wordDict.includes(word);
      if (isExists) {
        ans = ans || solve(s, wordDict, i + 1);
      }
    }

    dp[start] = ans;
    return dp[start];
  }
};

let s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];

console.log(wordBreak(s, wordDict));

var wordBreak = function (s, wordDict) {
  let dp = Array(s.length + 1).fill(false);

  // Fill in the base case
  dp[s.length] = true;
  for (let start = s.length - 1; start >= 0; start--) {
    let word = "";
    let ans = false;
    for (let i = start; i < s.length; i++) {
      word += s[i];
      // Find the word in wordDict
      let isExists = wordDict.includes(word);
      if (isExists) {
        // Filter the wordDict
        ans = ans || dp[i + 1];
      }
    }

    dp[start] = ans;
  }

  return dp[0];
};

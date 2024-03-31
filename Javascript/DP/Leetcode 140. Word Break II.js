/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  // Save dictionary in a map
  let dictionary = new Map();
  wordDict.forEach((w) => dictionary.set(w, true));
  let dp = new Map();
  let result = solve(s, dictionary, 0);
  return result;

  function solve(s, dictionary, start) {
    // Base Case
    if (start >= s.length) return [""];

    // Check if dp has the ans
    if (dp.has(start)) return dp.get(start);

    let ans = [];
    let word = "";
    for (let i = start; i < s.length; i++) {
      word += s[i];
      if (!dictionary.has(word)) continue;

      // If found
      let rightAns = solve(s, dictionary, i + 1);
      // right ans can have multiple words
      if (rightAns != null) {
        rightAns.forEach((w) => {
          if (w.length > 0) {
            ans.push(word + " " + w);
          } else {
            ans.push(word);
          }
        });
      }
    }

    dp.set(start, ans);
    return ans;
  }
};

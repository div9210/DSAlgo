/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let dp = Array(s1.length + 1)
    .fill()
    .map(() => Array(s2.length + 1).fill(null));
  let minAsciiCost = solve(s1, 0, s2, 0);
  return minAsciiCost;

  function solve(s1, i1, s2, i2) {
    // Base Cases

    // If both goes out of bound together
    if (i1 >= s1.length && i2 >= s2.length) {
      return 0;
    }

    // If s1 goes out of bound, but s2 has characters
    if (i1 >= s1.length && i2 < s2.length) {
      let cost = 0;
      while (i2 < s2.length) {
        cost += s2.charCodeAt(i2);
        i2++;
      }

      return cost;
    }

    // If s2 goes out of bound, but s1 has characters
    if (i2 >= s2.length && i1 < s1.length) {
      let cost = 0;
      while (i1 < s1.length) {
        cost += s1.charCodeAt(i1);
        i1++;
      }

      return cost;
    }

    // Check if dp has the ans already
    if (dp[i1][i2] != null) {
      return dp[i1][i2];
    }

    if (s1[i1] == s2[i2]) {
      return solve(s1, i1 + 1, s2, i2 + 1);
    } else {
      // Try removing from each of them one at a time
      // Removing i1 from s1, and adding the cost
      let costForRemovalFromFirst =
        s1.charCodeAt(i1) + solve(s1, i1 + 1, s2, i2);
      let costForRemovalFromSecond =
        s2.charCodeAt(i2) + solve(s1, i1, s2, i2 + 1);

      dp[i1][i2] = Math.min(costForRemovalFromFirst, costForRemovalFromSecond);
      return dp[i1][i2];
    }
  }
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let dp = Array(s1.length + 1)
    .fill()
    .map(() => Array(s2.length + 1).fill(0));

  // Base Case
  for (let i = s1.length - 1; i >= 0; i--) {
    dp[i][s2.length] = s1.charCodeAt(i) + dp[i + 1][s2.length];
  }

  for (let j = s2.length - 1; j >= 0; j--) {
    dp[s1.length][j] = s2.charCodeAt(j) + dp[s1.length][j + 1];
  }

  for (let i = s1.length - 1; i >= 0; i--) {
    for (let j = s2.length - 1; j >= 0; j--) {
      if (s1[i] == s2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        // Try removing from each of them one at a time
        // Removing i1 from s1, and adding the cost
        let costForRemovalFromFirst = s1.charCodeAt(i) + dp[i + 1][j];
        let costForRemovalFromSecond = s2.charCodeAt(j) + dp[i][j + 1];

        dp[i][j] = Math.min(costForRemovalFromFirst, costForRemovalFromSecond);
      }
    }
  }

  return dp[0][0];
};

let s1 = "sea",
  s2 = "eat";

console.log(minimumDeleteSum(s1, s2));

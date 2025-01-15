/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let dp = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill(null));
    return solve(0, 0);

    function solve(i, j) {
        // Both gone out of bounds together
        if (i >= s.length && j >= p.length) return true;

        // Pattern is finished but there are some chars left to match
        if (j >= p.length) return false;

        if (dp[i][j] != null) return dp[i][j];

        // If the str is not over check if the current char matches
        let matched = i < s.length && (s[i] == p[j] || p[j] == ".");

        // Check if j + 1 has a *
        if (j + 1 < p.length && p[j + 1] == "*") {
            let useTheStar = matched && solve(i + 1, j);
            let notUsingStar = solve(i, j + 2);

            return dp[i][j] = useTheStar || notUsingStar;
        }

        // If code reaches here that means there is no star to complicate
        // So if matched keep checking further otherwise return false
        if (matched) {
            return dp[i][j] = solve(i + 1, j + 1);
        } else {
            return dp[i][j] = false;
        }
    }
};
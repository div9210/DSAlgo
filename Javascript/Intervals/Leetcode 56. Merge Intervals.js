/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {
        let curr = intervals[i];
        let next = intervals[i + 1];

        // Check if they overlap
        // Condition : if curr ending is greater than next interval starting
        if (curr[1] >= next[0]) {
            intervals[i] = null;
            intervals[i + 1][0] = Math.min(curr[0], next[0]);
            intervals[i + 1][1] = Math.max(curr[1], next[1]);
        }
    }

    return intervals.filter(e => e != null);
};
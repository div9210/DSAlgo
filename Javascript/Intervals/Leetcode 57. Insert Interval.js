/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        // Non overlapping cases
        if (newInterval[1] < intervals[i][0]) {
            result = [...result, newInterval, ...intervals.slice(i)];
            return result;
        } else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } else {
            // Overlapped, Thus merge
            let newStartPoint = Math.min(newInterval[0], intervals[i][0]);
            let newEndPoint = Math.max(newInterval[1], intervals[i][1]);

            newInterval[0] = newStartPoint;
            newInterval[1] = newEndPoint;
            // We will not push it yet, bcz it can be merged to other intervals as well
        }
    }

    result.push(newInterval);
    return result;
};
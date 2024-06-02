/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let endTime = intervals[0][1];
    let removal = 0;
    for (let i = 1; i < intervals.length; i++) {
        // Check if non overlapping
        // Condition : start time of curr is more than or equal to endTime
        if (intervals[i][0] >= endTime) {
            // Update the endTime
            endTime = intervals[i][1];
        } else {
            // Overlapping
            endTime = Math.min(intervals[i][1], endTime);
            removal++;
        }
    }

    return removal;
};
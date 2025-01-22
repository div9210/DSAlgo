import {
    Interval,
} from '/opt/node/lib/lintcode/index.js';

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: if a person could attend all meetings
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 0; i < intervals.length - 1; i++) {
            let curr = intervals[i];
            let next = intervals[i + 1];

            // Overlapping Condition
            // if curr meeting has not ended and next meeting wants to start
            if (curr.end > next.start) {
                return false;
            }
        }

        return true;
    }
}
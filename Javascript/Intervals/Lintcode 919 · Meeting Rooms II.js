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
     * @return: the minimum number of conference rooms required
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let pq = new HeapWithComparator((a, b) => a.end - b.end);

        // Intial State
        pq.insert(intervals[0]);

        for (let i = 1; i < intervals.length; i++) {
            // Check if the current interval overlaps with the top meeting in the heap
            // Condition : if current meeting is trying to start before the next meeting ends
            let currentMeeting = pq.peek();
            let newMeeting = intervals[i];

            if (currentMeeting.end > newMeeting.start) {
                // Assign a new room
                pq.insert(newMeeting);
            } else {
                // It will take the current meeting room after the current meeting is finished
                pq.delete(); // After the removal of current meeting
                pq.insert(newMeeting);
            }
        }

        return pq.size();
    }
}

class HeapWithComparator {
    constructor(cfn) {
        this.elements = [];
        this.cfn = cfn;
    }

    swap(i, j) {
        let temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = temp;
    }

    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.cfn(this.elements[currentIndex], this.elements[parentIndex]) < 0) {
                // Swap
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    insert(val) {
        this.elements.push(val);
        let insertIndex = this.elements.length - 1;
        this.heapifyUp(insertIndex);
    }

    heapifyDown(index) {
        let n = this.elements.length;
        let currentIndex = index;
        while (currentIndex < n) {
            let correctIndex = currentIndex;
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;

            if (leftChildIndex < n && this.cfn(this.elements[leftChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = leftChildIndex;
            }

            if (rightChildIndex < n && this.cfn(this.elements[rightChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = rightChildIndex;
            }

            if (correctIndex != currentIndex) {
                this.swap(correctIndex, currentIndex);
                currentIndex = correctIndex;
            } else {
                break;
            }
        }
    }

    delete() {
        let root = this.elements[0];

        let safestNode = this.elements[this.elements.length - 1];
        this.elements[0] = safestNode;
        this.elements.pop();

        this.heapifyDown(0);
        return root;
    }

    peek() {
        return this.elements[0];
    }

    isEmpty() {
        return this.elements.length == 0;
    }

    size() {
        return this.elements.length;
    }
}

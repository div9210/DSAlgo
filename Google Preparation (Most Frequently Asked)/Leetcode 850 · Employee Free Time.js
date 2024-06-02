/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

export class Solution {
    /**
     * @param schedule: a list schedule of employees
     * @return: Return a list of finite intervals 
     */
    employeeFreeTime(schedule) {
        let intervals = [];
        for (let s of schedule) {
            for (let i = 0; i < s.length; i += 2) {
                let st = s[i];
                let end = s[i + 1];
                intervals.push([st, end]);
            }
        }


        let pq = new PriorityQueueI((a, b) => a[0] - b[0]);
        for (let int of intervals) {
            pq.insert(int);
        }

        let res = [];
        let prevInterval = pq.delete();
        while (pq.size() > 0) {
            let currInterval = pq.delete();
            // Check if they overlap
            if (currInterval[0] <= prevInterval[1]) {
                let newStart = Math.min(currInterval[0], prevInterval[0]);
                let newEnd = Math.max(currInterval[1], prevInterval[1]);

                // Now the whole prevInterval is the merged interval
                prevInterval = [newStart, newEnd];
            } else {
                // You have a free time between intervals
                let freetime = new Interval(prevInterval[1], currInterval[0]);
                res.push(freetime);
                // Move prev to curr and move to the next iterations
                prevInterval = currInterval;
            }
        }
        return res;
    }
}

class PriorityQueueI {
    constructor(cFn) {
        this.elements = [];
        this.cFn = cFn;
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
            // If child to parent comparison becomes less than 0
            if (this.cFn(this.elements[currentIndex], this.elements[parentIndex]) < 0) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex
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

            if (leftChildIndex < n && this.cFn(this.elements[leftChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = leftChildIndex;
            }

            if (rightChildIndex < n && this.cFn(this.elements[rightChildIndex], this.elements[correctIndex]) < 0) {
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

    size() {
        return this.elements.length;
    }

    peek() {
        return this.elements[0];
    }
}
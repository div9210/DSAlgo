/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    let qWithIndex = queries.map((q, i) => [q, i]);
    qWithIndex.sort((a, b) => a[0] - b[0]);
    let minH = new PriorityQueueI((a, b) => a[1] - b[1]);

    let result = new Array(queries.length).fill(0);
    let intervalsAdded = 0;
    for (let [q, i] of qWithIndex) {
        for (let j = intervalsAdded; j < intervals.length; j++) {
            let [start, end] = intervals[j];
            // Check if query falls in the range of the interval
            if (start <= q && end >= q) {
                minH.insert([end, end - start + 1]);
                intervalsAdded++;
            } else {
                break;
            }
        }

        while (!minH.isEmpty() && minH.peek()[0] < q) {
            minH.delete();
        }

        let pickSmallestInterval = minH.peek();
        result[i] = pickSmallestInterval[1];
    }

    return result;
};

class PriorityQueueI {
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

let intervals =
    [[4, 5], [5, 8], [1, 9], [8, 10], [1, 6]],
    queries =
        [7, 9, 3, 9, 3]

console.log(minInterval(intervals, queries));
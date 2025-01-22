/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let freq = {};
    for (let t of tasks) {
        if (!freq[t]) freq[t] = 0;
        freq[t]++;
    }

    let maxHeap = new PriorityQueueI((a, b) => b.count - a.count);
    for (let key in freq) {
        maxHeap.insert({ char: key, count: freq[key] });
    }

    let time = 0;
    while (maxHeap.size() > 0) {
        let cooldownPeriod = n + 1;
        let removedTask = [];
        while (cooldownPeriod) {
            if (maxHeap.size() > 0) {
                // If reached here that means process a task
                let mostFrequent = maxHeap.delete();
                mostFrequent.count--;
                if (mostFrequent.count > 0)
                    removedTask.push(mostFrequent);
            }
            cooldownPeriod--;
            if (removedTask.length > 0) {
                time++; // Any how time will increase
            }
        }

        // When you are done with a set
        while (removedTask.length) {
            let task = removedTask.pop();
            maxHeap.insert(task);
        }
    }

    return time;
};

class PriorityQueueI {
    constructor(cFn) {
        this.elements = [];
        this.cFn = cFn
    }

    swap(i, j) {
        let temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = temp;
    }

    insert(val) {
        this.elements.push(val);
        let valIndex = this.elements.length - 1;
        this.heapifyUp(valIndex);
    }
    heapifyUp(index) {
        let currentIndex = index;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.cFn(this.elements[currentIndex], this.elements[parentIndex]) < 0) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
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

    heapifyDown(index) {
        let currentIndex = index;
        let n = this.elements.length;

        while (currentIndex < n) {
            let lChildIndex = 2 * currentIndex + 1;
            let rChildIndex = 2 * currentIndex + 2;
            let correctIndex = currentIndex;

            if (lChildIndex < n && this.cFn(this.elements[lChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = lChildIndex;
            }

            if (rChildIndex < n && this.cFn(this.elements[rChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = rChildIndex;
            }

            if (correctIndex != currentIndex) {
                this.swap(correctIndex, currentIndex);
                currentIndex = correctIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.elements[0];
    }

    size() {
        return this.elements.length;
    }
}

let tasks = ["A", "A", "A", "B", "B", "B"], n = 2;
console.log(leastInterval(tasks, n));
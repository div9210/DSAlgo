/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    let n = hand.length;
    if (n % groupSize != 0) return false;

    let freq = {};
    for (let card of hand) {
        if (!freq[card]) freq[card] = 0;
        freq[card] += 1;
    }

    let pq = new PriorityQueueI((a, b) => a.card - b.card);
    for (let key in freq) {
        pq.insert({ card: Number(key), count: freq[key] });
    }

    let extraCardsQueue = [];

    while (pq.size() > 0) {
        let front = pq.peek(); pq.delete();
        front.count--;
        for (let i = 1; i < groupSize; i++) {
            if (!pq.isEmpty() && pq.peek().card == front.card + i) {
                let nextCard = pq.peek(); pq.delete();
                nextCard.count--;
                if (nextCard.count >= 1) {
                    extraCardsQueue.push(nextCard);
                }
            } else {
                return false;
            }
        }

        while (extraCardsQueue.length > 0) {
            let front = q.shift();
            pq.insert(front);
        }
        if (front.count >= 1) pq.insert(front);
    }

    return true;
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

let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3

console.log(isNStraightHand(hand, groupSize));
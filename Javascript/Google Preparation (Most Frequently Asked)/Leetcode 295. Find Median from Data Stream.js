class MedianFinder {
    constructor() {
        this.median = 0;
        this.maxHeap = new PriorityQueueI((a, b) => b - a);
        this.minHeap = new PriorityQueueI((a, b) => a - b);
    }
    medianFromBoth(maxH, minH) {
        let midElement1 = maxH.peek();
        let midElement2 = minH.peek();
        return (midElement1 + midElement2) / 2;
    }
    updateMedian(maxH, minH, element) {
        // maxH (left to Median)
        // minH (right to Median)
        if (maxH.size() == minH.size()) {
            if (element > this.median) {
                // Put element at the right to Median i.e minH
                minH.insert(element);
                this.median = minH.peek();
            } else {
                // Put element at the left to Median i.e maxH
                maxH.insert(element);
                this.median = maxH.peek();
            }
        } else if (maxH.size() == minH.size() + 1) {
            if (element > this.median) {
                // Put element in the minH due to which size of minH == size of maxH
                minH.insert(element);

                this.median = this.medianFromBoth(maxH, minH);
            } else {
                // Put element in the maxH
                // Size is already unequal if we do this the difference in size will be 2
                // So let's remove one node from maxH first
                // and put that node in minH which will make maxH shorter by 1
                // Then we will put the element in maxH which will make both equal
                let pickFromMaxH = maxH.peek();
                maxH.delete();
                // Put this in minH
                minH.insert(pickFromMaxH);


                maxH.insert(element);
                // Now both are equal in size

                this.median = this.medianFromBoth(maxH, minH);
            }
        } else if (maxH.size() + 1 == minH.size()) {
            if (element < this.median) {
                // Put element in the maxH due to which size of minH == size of maxH
                maxH.insert(element);

                this.median = this.medianFromBoth(maxH, minH);
            } else {
                // Put element in the minH
                // Size is already unequal if we do this the difference in size will be 2
                // So let's remove one node from minH first
                // and put that node in maxH which will make minH shorter by 1
                // Then we will put the element in minH which will make both equal
                let pickFromMinH = minH.peek();
                minH.delete();
                // Put this in minH
                maxH.insert(pickFromMinH);


                minH.insert(element);
                // Now both are equal in size

                this.median = this.medianFromBoth(maxH, minH);
            }
        }
    }
    addNum(num) {
        this.updateMedian(this.maxHeap, this.minHeap, num);
    }
    findMedian = function () {
        return this.median;
    };
}

class PriorityQueueI {
    constructor(cFn) {
        this.elements = [];
        this.comparatorFn = cFn;
    }
    size() {
        return this.elements.length;
    }
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    insert(val) {
        // Push the val in the elements
        this.elements.push(val);

        // Heapify Up (Child To Parent)
        let currentIndex = this.elements.length - 1;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            // If relationship between parentIndex element and currentIndex element is
            // as per the comparator function
            // The comparator function will return a value less than 0
            let resultFromComparator = this.comparatorFn(
                this.elements[parentIndex],
                this.elements[currentIndex]
            );
            if (resultFromComparator < 0) {
                // No need for further heapify
                break;
            } else {
                // Swap
                this.swap(this.elements, parentIndex, currentIndex);
                currentIndex = parentIndex;
            }
        }
    }

    delete() {
        let root = this.elements[0];
        if (this.elements.length == 0) {
            console.log("Underflow");
            return;
        }

        // Now pick the safest node in the heap i.e rightMost
        let safestNode = this.elements[this.elements.length - 1];
        // Replace the root with safestNode and delete the safestNode
        this.elements[0] = safestNode;
        this.elements.pop();

        // Heapify Down (Parent to Child)
        let currentIndex = 0;
        let n = this.elements.length;
        while (currentIndex < n) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallestIndex = currentIndex;

            // If the comparatorFn for smallestIndex and leftChildIndex elements returns anything less than 0
            // Then it is right but for the case of opposite i.e more than 0 we need to update smallestIndex
            if (
                leftChildIndex < n &&
                this.comparatorFn(
                    this.elements[smallestIndex],
                    this.elements[leftChildIndex]
                ) > 0
            ) {
                smallestIndex = leftChildIndex;
            }

            // If the comparatorFn for smallestIndex and rightChildIndex elements returns anything less than 0
            // Then it is right but for the case of opposite i.e more than 0 we need to update smallestIndex
            if (
                rightChildIndex < n &&
                this.comparatorFn(
                    this.elements[smallestIndex],
                    this.elements[rightChildIndex]
                ) > 0
            ) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex != currentIndex) {
                // Swap
                this.swap(this.elements, smallestIndex, currentIndex);
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }

        return root;
    }

    print() {
        console.log("Heap :", this.elements);
    }

    peek() {
        return this.elements[0];
    }
}
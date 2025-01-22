class HeapWithComparator {
    constructor(cFn) {
        this.elements = [];
        this.cFn = cFn;
    }
    size() {
        return this.elements.length;
    }
    isEmpty() {
        return this.elements.length == 0
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
            if (this.cFn(this.elements[currentIndex], this.elements[parentIndex]) < 0) {
                // Fails the sorting condition
                // Thus swap
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex; // Update currentIndex
            } else {
                // If true for sorting condition
                // No need to heapify further
                break;
            }
        }
    }

    insert(val) {
        // Insert the element directly
        this.elements.push(val);
        let valIndex = this.elements.length - 1;
        // HeapifyUp the index
        this.heapifyUp(valIndex);
    }

    heapifyDown(index) {
        // The element at index has to pass the sorting condition
        // among all its children
        let currentIndex = index;
        let n = this.elements.length;
        while (currentIndex < n) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;

            // Let us believe the currentIndex is the most right index
            let correctIndex = currentIndex;
            // Now check
            if (leftChildIndex < n && this.cFn(this.elements[leftChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = leftChildIndex;
            }

            if (rightChildIndex < n && this.cFn(this.elements[rightChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = rightChildIndex;
            }

            if (correctIndex != currentIndex) {
                // Swap
                this.swap(currentIndex, correctIndex);
                currentIndex = correctIndex; // Update currentIndex
            } else {
                break;
            }
        }
    }

    delete() {
        if (this.elements.length == 0) return null;

        // Delete the root 
        let root = this.elements[0];
        // Pick the safest node to replace root i.e last node
        let safestNode = this.elements.pop();

        this.elements[0] = safestNode;
        // Perform heapify down on the 0th index
        this.heapifyDown(0);

        return root;
    }
}
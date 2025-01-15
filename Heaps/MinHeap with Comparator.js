class MinHeapWithComp {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (
        this.comparator(this.heap[currentIndex], this.heap[parentIndex]) < 0
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallestChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[leftChildIndex]) <
          0
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (
        this.comparator(
          this.heap[smallestChildIndex],
          this.heap[currentIndex]
        ) < 0
      ) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // Remove the safest node (last) and put it at root
    this.heapifyDown(0);

    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

// // Example usage:

// // Define a custom comparator for objects
// const customComparator = (obj1, obj2) => {
//   // Compare based on a specific property of the objects
//   return obj1.priority - obj2.priority;
// };

// // Create a MinHeap with the custom comparator
// const minHeap = new MinHeap(customComparator);

// // Insert objects into the heap
// minHeap.insert({ priority: 5, value: "Object 1" });
// minHeap.insert({ priority: 3, value: "Object 2" });
// minHeap.insert({ priority: 7, value: "Object 3" });

// // Extract the minimum object
// console.log(minHeap.extractMin()); // Output: { priority: 3, value: 'Object 2' }

module.exports = {
  MinHeapWithComp,
};

class MaxHeap {
  constructor() {
    this.elements = [-1]; // since we require 1 based indexing, filling -1 at the 0 index
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  insert(val) {
    let lastFilledPos = this.elements.length - 1;
    if (lastFilledPos == 0) {
      this.elements.push(val);
      return;
    }

    let vacantPos = lastFilledPos + 1;
    this.elements[vacantPos] = val;

    let parentOfVacantPos = Math.floor(vacantPos / 2);

    // Take val to it's correct position (if placed incorrectly)
    // AKA Heapify
    while (parentOfVacantPos > 0 && val > this.elements[parentOfVacantPos]) {
      // swap both node
      this.elements[vacantPos] = this.elements[parentOfVacantPos];
      this.elements[parentOfVacantPos] = val;

      // Update the vacantPos and parentOfVacantPos
      vacantPos = parentOfVacantPos;
      parentOfVacantPos = Math.floor(vacantPos / 2);
    }
  }

  delete() {
    let root = this.elements[1];
    if (this.elements.length == 2) {
      // That means there is only one node in the heap
      this.elements.pop();
      return;
    }

    // Perform deletion
    let rightMostElement = this.elements[this.elements.length - 1]; // Safest element i.e not dependent
    // 1. Delete the right most element
    this.elements.pop();

    // 2. Replace root with rightMostElement
    this.elements[1] = rightMostElement;

    // Heapify the rest
    let currentIndex = 1;
    let n = this.elements.length;

    while (currentIndex < n) {
      let leftChildIndex = 2 * currentIndex;
      let rightChildIndex = 2 * currentIndex + 1;
      let largestIndex = currentIndex;
      // Find the largest
      if (this.elements[largestIndex] < this.elements[leftChildIndex]) {
        largestIndex = leftChildIndex;
      }

      if (this.elements[largestIndex] < this.elements[rightChildIndex]) {
        largestIndex = rightChildIndex;
      }

      // If there is no change in currentIndex and largestIndex
      // That means currentIndex is indeed the largestIndex
      // In that case do nothing and do nothing further too i.e break, But if not
      if (currentIndex !== largestIndex) {
        // Swap the currentIndex index with largestIndex
        this.swap(this.elements, currentIndex, largestIndex);
        // Move on to the next largest
        currentIndex = largestIndex;
      } else {
        break;
      }
    }

    // console.log("Deleted", root);
    return root;
  }

  print() {
    console.log("Printing Heap from index 1");
    console.log(this.elements.slice(1, this.elements.length));
  }

  heapifyOneNode(arr, n, index) {
    // Base case
    if (index >= n) {
      return;
    }

    // Let us suppose current index is the largest
    let largestIndex = index;
    let leftChildIndex = 2 * index;
    let rightChildIndex = 2 * index + 1;

    // Update the largestIndex if possible
    if (leftChildIndex < n && arr[leftChildIndex] > arr[largestIndex]) {
      largestIndex = leftChildIndex;
    }

    if (rightChildIndex < n && arr[rightChildIndex] > arr[largestIndex]) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex != index) {
      // Swap both
      this.swap(arr, largestIndex, index);

      // New index is the largestIndex
      index = largestIndex;
      // Recursive Call
      this.heapifyOneNode(arr, n, index);
    }
  }

  heapifyArray(arr) {
    // Since from n/2 --> n all nodes are leaf nodes
    // And we are starting from the bottom of the tree
    // We can ignore the leaf nodes

    // Also remember that heap start from index 1
    // So adding an dummy node at the front
    arr.unshift(-1);
    let n = arr.length;
    for (let i = Math.floor(n / 2); i > 0; i--) {
      this.heapifyOneNode(arr, n, i);
    }
    arr.shift(); // Remove the extra -1
  }

  heapSort(arr) {
    // This is very easy
    let n = arr.length;
    // Convert the arr into heap
    this.heapifyArray(arr);

    // Now since we know the first element of heap is the max
    // We have to swap it with the last element
    // Then heapify the top element every time with last node (swapped max) fixed

    // For heapification, add a dummyNode so that it follows 1 based indexing
    arr.unshift(-1);
    while (n != 1) {
      this.swap(arr, 1, n);
      n--;
      this.heapifyOneNode(arr, n, 1);
    }
    arr.shift();
  }

  replaceRoot(value) {
    this.elements[1] = value;
    // Heapify the root
    this.heapifyOneNode(this.elements, this.elements.length, 1);
  }

  getRoot() {
    return this.elements[1];
  }

  size() {
    this.elements.length - 1;
  }
}

// let heap = new MaxHeap();
// heap.insert(100);
// heap.insert(50);
// heap.insert(75);
// heap.insert(40);
// heap.insert(30);
// heap.insert(20);
// heap.print();

// // Now adding a greater element at the vacant pos
// heap.insert(1);
// heap.print();
// heap.insert(50); // should replace 40
// heap.print();

// heap.insert(20);
// heap.insert(11);
// heap.insert(5);
// heap.insert(10);
// heap.insert(6);

// heap.print();
// heap.delete();
// heap.print();
// heap.delete();
// heap.print();

// let ipArray = [15, 14, 65, 75, 13, 16, 12, 19];
// console.log("ipArray", ipArray);
// After Heapification of array
// heap.heapifyArray(ipArray);
// console.log("After Heapification of array", ipArray);
// Heap sort
// heap.heapSort(ipArray);
// console.log("Heap sort", ipArray);

module.exports = {
  MaxHeap,
};

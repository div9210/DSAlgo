class MinHeap {
  constructor() {
    this.elements = [-1];
  }
  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  insert(val) {
    let lastFilledPos = this.elements.length - 1;
    if (lastFilledPos == 0) {
      // Only contains the dummy -1
      this.elements.push(val);
      return;
    }

    let vacantPos = lastFilledPos + 1;
    // Put the element at the vacantPos
    this.elements[vacantPos] = val;

    // Heapify the node you just inserted
    let parentNodePos = Math.floor(vacantPos / 2);
    while (
      parentNodePos > 0 &&
      this.elements[vacantPos] < this.elements[parentNodePos]
    ) {
      // Swap the nodes
      this.swap(this.elements, vacantPos, parentNodePos);

      // Update the vacantPos and parentNodePos
      vacantPos = parentNodePos;
      parentNodePos = Math.floor(vacantPos / 2);
    }
  }

  delete() {
    if (this.elements.length == 1) {
      console.log("Underflow");
      return;
    }

    console.log("Performing deletion on node", this.elements[1]);

    if (this.elements.length == 2) {
      // Only one element exists in heap
      // So delete it and return
      this.elements.pop();
      return;
    }

    // If code reaches here
    // Start the algorithm

    // 1. Pick the safest node to replace the root i.e last node
    let lastNode = this.elements[this.elements.length - 1];
    // Replace the root with this'
    this.elements[1] = lastNode;
    // Delete the last node
    this.elements.pop();

    // Heapify the new root node
    let currentIndex = 1;
    let n = this.elements.length;
    while (currentIndex < n) {
      let smallestIndex = currentIndex;
      // Check if left or right child of this node are smaller than this
      let leftChildIndex = 2 * currentIndex;
      let rightChildIndex = 2 * currentIndex + 1;

      // Find the smallest
      if (
        leftChildIndex < n &&
        this.elements[leftChildIndex] < this.elements[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < n &&
        this.elements[rightChildIndex] < this.elements[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex == currentIndex) {
        // That means smallestIndex did not change at all
        // That means both left and right child are not smaller than root. Thus root is correct
        break;
      } else {
        // Swap the nodes
        this.swap(this.elements, currentIndex, smallestIndex);
        currentIndex = smallestIndex;
      }
    }
  }
  print() {
    console.log("Printing Heap from index 1");
    console.log(this.elements.slice(1));
  }

  size() {
    this.elements.length - 1;
  }
}

let minH = new MinHeap();

minH.insert(5);
minH.insert(54);
minH.insert(2);
minH.insert(7);
minH.insert(1);
minH.print();
minH.delete();
minH.print();
minH.delete();
minH.print();
minH.delete();
minH.print();

module.exports = {
  MinHeap,
};

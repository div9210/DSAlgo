const { MaxHeap } = require("./MaxHeap");
const { MinHeap } = require("./MinHeap");

class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
    this.median = 0;
  }

  solveForMedian(element) {
    if (this.maxHeap.size() === this.minHeap.size()) {
      if (element > this.median) {
        this.minHeap.insert(element);
        this.median = this.minHeap.peek().element;
      } else {
        this.maxHeap.insert(element);
        this.median = this.maxHeap.front().element;
      }
    } else if (this.maxHeap.size() === this.minHeap.size() + 1) {
      if (element > this.median) {
        this.minHeap.insert(element);
      } else {
        const maxTop = this.maxHeap.delete().element;
        this.minHeap.insert(maxTop);
        this.maxHeap.insert(element);
      }
      this.median =
        (this.minHeap.front().element + this.maxHeap.front().element) / 2;
    } else if (this.minHeap.size() === this.maxHeap.size() + 1) {
      if (element > this.median) {
        const minTop = this.minHeap.delete().element;
        this.maxHeap.insert(minTop);
        this.minHeap.insert(element);
      } else {
        this.maxHeap.insert(element);
      }
      this.median =
        (this.minHeap.front().element + this.maxHeap.front().element) / 2;
    }
  }

  findMedian(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      this.solveForMedian(element);
      console.log("Median found:", this.median);
    }
  }
}

// Example usage
const arr = [12, 10, 8, 4, 2, 3, 15];
const medianFinder = new MedianFinder();
medianFinder.findMedian(arr);

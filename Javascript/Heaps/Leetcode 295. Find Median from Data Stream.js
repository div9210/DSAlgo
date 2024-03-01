let {
  HeapWithComparator,
} = require("./Implementation from Scratch/HeapWithComparator");

class MedianFinder {
  constructor() {
    this.arr = [];
    this.median = [0];
    this.maxHeap = new HeapWithComparator((a, b) => b - a);
    this.minHeap = new HeapWithComparator((a, b) => a - b);
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
    this.arr.push(num);
    this.updateMedian(this.maxHeap, this.minHeap, num);
  }
  findMedian = function () {
    return this.median;
  };
}

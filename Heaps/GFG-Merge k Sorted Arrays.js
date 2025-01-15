const { MinHeapWithComp } = require("./MinHeap with Comparator");

class Solution {
  mergeKArrays(arr, K) {
    let ans = [];
    let minHeap = new MinHeapWithComp((a, b) => a.data - b.data);

    // Process first elements of k arrays
    for (let row = 0; row < K; row++) {
      minHeap.insert({ data: arr[row][0], row: row, col: 0 });
    }

    while (minHeap.size() != 0) {
      let min = minHeap.peek();
      minHeap.extractMin();
      ans.push(min.data);

      // Insert the next element (if present)
      // Next Element : col + 1
      if (min.col + 1 < K) {
        let data = arr[min.row][min.col + 1];
        minHeap.insert({ data: data, row: min.row, col: min.col + 1 });
      }
    }

    return ans;
  }
}

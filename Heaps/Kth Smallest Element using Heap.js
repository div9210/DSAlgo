const { MaxHeap } = require("./MaxHeap");

function KthSmallestUsingHeap(arr, k) {
  // Let us insert first k elements into the heap
  let heap = new MaxHeap();
  for (let i = 0; i < k; i++) {
    heap.insert(arr[i]);
  }

  // Now for the rest k elements if the value is less than the root
  // Replace the root
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap.getRoot()) {
      // heap.replaceRoot(arr[i]);
      heap.delete();
      heap.insert(arr[i]);
    }
  }

  return heap.getRoot();
}

let arr = [12, 5, 787, 1, 23];
let k = 2;
console.log(KthSmallestUsingHeap(arr, k));

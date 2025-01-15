class Solution {
  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  heapify(arr, index) {
    let n = arr.length;
    while (index < arr.length) {
      let leftChildIndex = 2 * i + 1;
      let rightChildIndex = 2 * i + 2;
      let largestIndex = index;

      if (leftChildIndex < n && arr[leftChildIndex] > arr[largestIndex]) {
        largestIndex = leftChildIndex;
      }
      if (rightChildIndex < n && arr[rightChildIndex] > arr[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex != index) {
        // Swap
        this.swap(arr, largestIndex, index);
        index = largestIndex;
      } else {
        break;
      }
    }
  }
  mergeHeaps(a, b, n, m) {
    let c = a.concat(b);

    for (let i = Math.floor(c.length / 2); i >= 0; i--) {
      this.heapify(c, i);
    }

    return c;
  }
}

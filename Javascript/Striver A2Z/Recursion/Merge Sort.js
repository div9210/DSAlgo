function mergeSort(arr, start, end) {
  // Base case: if the array has one or no element
  if (start >= end) return arr.slice(start, end + 1); // Return the single-element array

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Recursively sort the left and right halves
  let leftSorted = mergeSort(arr, start, mid); // Left part: start to mid
  let rightSorted = mergeSort(arr, mid + 1, end); // Right part: mid + 1 to end

  // Merge the two sorted halves
  return merge(leftSorted, rightSorted);

  function merge(left, right) {
    let i = 0,
      j = 0;
    let fillIndex = 0;
    let subMergedArray = new Array(left.length + right.length);

    // Merge elements in sorted order
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        subMergedArray[fillIndex] = left[i];
        i++;
      } else {
        subMergedArray[fillIndex] = right[j];
        j++;
      }
      fillIndex++;
    }

    // Add any remaining elements from `left`
    while (i < left.length) {
      subMergedArray[fillIndex] = left[i];
      i++;
      fillIndex++;
    }

    // Add any remaining elements from `right`
    while (j < right.length) {
      subMergedArray[fillIndex] = right[j];
      j++;
      fillIndex++;
    }

    return subMergedArray;
  }
}

const sorted = mergeSort([5, 1, 2, 1, 3, 4, 5, 3, 7], 0, 8);
console.log({ sorted });

function quickSort(arr, left, right) {
  // Base case: If the sub-array has one or zero elements, it's already sorted
  if (left >= right) return;

  // Choose a pivot and partition the array around it
  let partitionIndex = choosePivotAndSetPosition(arr, left, right);

  // Recursively sort the left and right partitions
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);

  function choosePivotAndSetPosition(arr, left, right) {
    // Choosing the pivot (first element of the sub-array)
    let pivot = arr[left];
    let i = left,
      j = right;

    while (i < j) {
      // Find the first element that is greater than the pivot from the left
      while (arr[i] <= pivot && i < right) {
        i++;
      }

      // Find the first element that is smaller than the pivot from the right
      while (arr[j] >= pivot && j > left) {
        j--;
      }

      // If still i and j are at correct indexes i.e i < j
      if (i < j) swap(arr, i, j);
    }

    // Correct position of the pivot is j
    swap(arr, left, j);
    return j;
  }

  function swap(arr, i, j) {
    // Swap values at indices i and j
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let arr = [5, 1, 4, 7, 6];
quickSort(arr, 0, arr.length - 1);
console.log("arr", arr);

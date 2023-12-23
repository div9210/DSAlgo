function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function QuickSort(arr, start, end) {
  // Base case for recursion
  if (start >= end) {
    return;
  }
  // Let us keep 2 things an iterator and a fillIndex and
  // assuming the end as pivot
  let i = 0;
  let fillIndex = 0;
  let pivot = end;
  while (i < pivot) {
    if (arr[i] <= arr[pivot]) {
      swap(arr, fillIndex, i);
      fillIndex++;
    }
    i++;
  }

  // When the loop ends fillIndex has reached at the right position for pivot
  // As all the elements that are smaller than the pivot has been swapped to the left
  // of the pivot position.
  // So finally swapping the pivot with it's right position i.e fillIndex
  swap(arr, fillIndex, pivot);

  // Recursive calls
  // 1. For the left sub array
  QuickSort(arr, start, fillIndex - 1);

  // 2. For the right sub array
  QuickSort(arr, fillIndex, end);
}

let arr = [4, 1, 3, 2, 5, -1];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);

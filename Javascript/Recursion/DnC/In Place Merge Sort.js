function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function merge(arr, start, end) {
  let totalLengeth = end - start + 1;
  let gap = Math.ceil(totalLengeth / 2);
  while (gap > 0) {
    let i = start;
    let j = start + gap;
    while (j <= end) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
      i++;
      j++;
    }

    gap = gap == 1 ? 0 : Math.ceil(gap / 2);
  }
}

function mergeSort(arr, start, end) {
  if (start >= end) return;

  // Recursive calls for left and right subarray
  let mid = Math.floor(start + (end - start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, end);
}

let arr = [2, 1, 5, 4, 3, 7, 6, 10, 9];
mergeSort(arr, 0, arr.length - 1);
console.log("arr", arr);

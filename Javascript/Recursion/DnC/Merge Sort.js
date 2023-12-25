function merge(arr, start, end) {
  let mid = Math.floor(start + (end - start) / 2);
  let leftArray = arr.slice(start, mid + 1); // start --> mid
  let rightArray = arr.slice(mid + 1, end + 1); // mid + 1 --> end

  let i = 0;
  let j = 0;
  let fillIndex = start;
  while (i < leftArray.length || j < rightArray.length) {
    // If i reached end and j did not
    if (i == leftArray.length) {
      // Only j are remaining
      // Fill j
      arr[fillIndex] = rightArray[j];
      j++;
      fillIndex++;
      continue;
    }

    // If j reached end and i didn't
    if (j == rightArray.length) {
      // Only i are remaining
      // Fill i
      arr[fillIndex] = leftArray[i];
      i++;
      fillIndex++;
      continue;
    }

    // If both i and j are valid indexes
    // Check which one of them is smaller
    if (leftArray[i] < rightArray[j]) {
      arr[fillIndex] = leftArray[i];
      i++;
      fillIndex++;
    } else if (rightArray[j] < leftArray[i]) {
      arr[fillIndex] = rightArray[j];
      j++;
      fillIndex++;
    } else {
      arr[fillIndex] = leftArray[i];
      fillIndex++;
      arr[fillIndex] = rightArray[j];
      fillIndex++;
      i++;
      j++;
    }
  }

  delete leftArray;
  delete rightArray;
}

function mergeSort(arr, start, end) {
  // Base Case
  if (start >= end) {
    return;
  }

  // Break the array into half
  let mid = Math.floor(start + (end - start) / 2);

  // Recursive call for left subarray
  mergeSort(arr, start, mid);

  // Recursive call for right subarray
  mergeSort(arr, mid + 1, end);

  // Merge the two sorted subarrays
  merge(arr, start, end);
}

let arr = [2, 1, 4, 8, 9, 3, 5, 6];
let start = 0;
let end = arr.length - 1;
mergeSort(arr, start, end);
console.log(arr);

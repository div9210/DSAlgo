class BinarySearch {
  searchElement(arr, target) {
    let start = arr[0];
    let end = arr[arr.length - 1];
    let mid = 0;
    // Start the loop
    while (start <= end) {
      // Find the mid element
      mid = Math.floor((start + end) / 2);

      // Check if we have found the target
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        // Since target is less than the middle element
        // Thus, we will move to the left
        end = mid - 1;
      } else if (arr[mid] < target) {
        // Since target is greater than the middle element
        // Thus, we will move to the right
        start = mid + 1;
      }
    }

    return -1;
  }
  findLeftMostOccurenceOfTarget(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    let result = -1;
    // Start the loop
    while (start <= end) {
      // Find the mid element
      mid = Math.floor((start + end) / 2);

      // Check if we have found the target
      if (arr[mid] === target) {
        result = mid;
        // Save the result and move to the left
        end = mid - 1;
      } else if (arr[mid] > target) {
        // Since target is less than the middle element
        // Thus, we will move to the left
        end = mid - 1;
      } else if (arr[mid] < target) {
        // Since target is greater than the middle element
        // Thus, we will move to the right
        start = mid + 1;
      }
    }

    return result;
  }
  findRightMostOccurenceOfTarget(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    let result = -1;
    // Start the loop
    while (start <= end) {
      // Find the mid element
      mid = Math.floor((start + end) / 2);

      // Check if we have found the target
      if (arr[mid] === target) {
        result = mid;
        start = mid + 1;
      } else if (arr[mid] > target) {
        // Since target is less than the middle element
        // Thus, we will move to the left
        end = mid - 1;
      } else if (arr[mid] < target) {
        // Since target is greater than the middle element
        // Thus, we will move to the right
        start = mid + 1;
      }
    }

    return result;
  }

  findMissingElementInSortedArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    let diff = 0;
    let result = 0;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      diff = arr[mid] - mid;
      if (diff === 1) {
        // Possibility that the pattern breaking number is at the right
        start = mid + 1;
      } else {
        // Pattern breaks either here or at the left
        // Thus storing the number as the result and moving to the left to look for more pattern breaking numbers
        result = arr[mid];
        end = mid - 1;
      }
    }
    if (result === 0) {
      return arr.length + 1;
    }
    return result - 1;
  }

  findPeakElementInMountedArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start < end) {
      if (arr[mid] < arr[mid + 1]) {
        // Line A
        // Thus peak exists at the right of mid, So moving right
        start = mid + 1;
      } else {
        // We are for sure at the line B
        // But that can be the peak as well.
        // So what's the condition of peak? Answer: All the elements in B are descending
        // That means for every mid existing in B, the left element of B should be bigger than the mid since it
        // is stored in descending order, except the peak, because the left element of peak exists in A which is not greater than mid.

        // Since we are at line B, answer exists either here or on the left. For safe side moving to the left
        // end = mid - 1
        // But if mid was the peak, we moved left of it, for the next iterations of Binary Search, the search would be an array that does not
        // include the peak, thus we will move left but without losing the peak
        end = mid;
        // Note: Since we are storing end = mid, for condition where start, end , mid --> all points to same element
        // end will not move to the left anymore and will not be less than start
        // Thus, while (start <= end) won't work. Thus using while(start < end) thus, when start === end the loop will break
      }

      mid = Math.floor((start + end) / 2);
    }

    // return start or end or mid for peak index
    // return arr[start] or arr[end] orf arr[mid] for peak element
    return arr[start];
  }
}

const binarySearch = new BinarySearch();
const result = binarySearch.searchElement([2, 3, 4, 6, 7, 1, 6, 8, 9], 1);
// console.log("result", result);

// Testing the missing element answer
const resultMissingNum = binarySearch.findMissingElementInSortedArray([
  1, 2, 3, 4, 5, 6, 7,
]);
console.log("resultMissingNum", resultMissingNum);

const resultMountedPeak = binarySearch.findPeakElementInMountedArray([
  10, 20, 30, 50, 60, 40, 30,
]);

console.log("resultMountedPeak", resultMountedPeak);

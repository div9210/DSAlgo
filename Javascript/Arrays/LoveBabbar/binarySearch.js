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
}

const binarySearch = new BinarySearch();
const result = binarySearch.searchElement([2, 3, 4, 6, 7, 1, 6, 8, 9], 1);
console.log("result", result);

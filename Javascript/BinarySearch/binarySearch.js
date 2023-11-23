class BinarySearch {
  exponentialSearchElement(arr, target) {
    let lowerStep = 1;
    while (lowerStep < arr.length && arr[lowerStep] <= target) {
      lowerStep = lowerStep * 2;
    }

    let start = Math.floor(lowerStep / 2);
    // let end = lowerStep - 1 < arr.length ? lowerStep - 1 : arr.length - 1;
    let end = Math.min(lowerStep - 1, arr.length - 1);

    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1;
  }
  searchElement(arr, target, start, end) {
    // let start = arr[0];
    // let end = arr[arr.length - 1];
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

  findPivotElementInSortedRotatedArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      if (start == end) return start;

      let mid = Math.floor((start + end) / 2);
      // Considering that the pivot in this case is the maximum number in this array
      // But since it is rotaed the increasing pattern will break after reaching the pivot
      // Exit condition
      if (arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid] < arr[mid - 1]) {
        return mid - 1;
      } else if (arr[mid] < arr[0]) {
        // line B
        end = mid - 1;
      } else {
        // line A
        start = mid + 1;
      }
    }

    return -1;
  }
  search(nums, target) {
    const pivotIndex = this.findPivotElementInSortedRotatedArray(nums);
    let result = -1;
    if (target >= nums[0] && target <= nums[pivotIndex]) {
      result = this.searchElement(nums, target, 0, pivotIndex);
    } else {
      result = this.searchElement(
        nums,
        target,
        pivotIndex + 1,
        nums.length - 1
      );
    }

    return result;
  }
  findSquareRootUsingBinarySearch(number) {
    let start = 0;
    let end = number;
    let ans = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Answer Condition
      let square = mid * mid;
      if (square === number) {
        return mid;
      } else if (square > number) {
        end = mid - 1;
      } else if (square < number) {
        // Since square root can be either less than the actual square root or the actual square root
        ans = mid;
        start = mid + 1;
      }
    }

    return ans;
  }

  searchMatrix(matrix, target) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let searchSpace = rows * columns;

    // Start BS Algorithm
    let start = 0;
    let end = searchSpace - 1;

    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Use mid to calculate the location of this cell in a 2D array (Matrix)
      let i = Math.floor(mid / columns);
      let j = mid % columns;
      if (matrix[i][j] === target) {
        return true;
      } else if (matrix[i][j] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return false;
  }

  divideUsingBinarySearch(dividend, divisor) {
    // The range of search space will be 0 to dividend
    let containsNegative = false;
    if (divisor < 0 || dividend < 0) {
      containsNegative = true;
    }

    if (divisor < 0 && dividend < 0) {
      containsNegative = false;
    }

    const postiveDivisor = divisor >= 0 ? divisor : -1 * divisor;
    const positiveDividend = dividend >= 0 ? dividend : -1 * dividend;
    let start = 0;
    let end = dividend;
    let mid = null;
    let ans = -1;

    if (dividend === 0) {
      return 0;
    }

    if (divisor === 0) {
      return -1;
    }
    while (start <= end) {
      mid = Math.floor(start + (end - start) / 2);
      if (mid * postiveDivisor === positiveDividend) {
        ans = mid;
        break;
      } else if (mid * postiveDivisor > positiveDividend) {
        end = mid - 1;
      } else {
        ans = mid;
        start = mid + 1;
      }
    }

    if (divisor == -1) {
      if (dividend != 1) ans = ans - 1;
    }
    ans = containsNegative ? -1 * ans : ans;

    return ans;
  }
  binarySearchOnNearlySortedArray(arr, target) {
    // Nearly sorted means element in the array can be present at
    // i index (if the array was completely sorted)
    // i - 1
    // i + 1
    // Approach : Apply normal binary search just with addition of extra checks at i+1 and i-1
    let start = 0;
    let end = arr.length - 1;
    let mid = null;
    while (start <= end) {
      mid = Math.floor(start + (end - start) / 2);
      // If the element is found
      // Predicate Function
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid - 1] === target) {
        return mid - 1;
      } else if (arr[mid + 1] === target) {
        return mid + 1;
      }

      // If not found, move left or right by 2 positions, since mid - 1 or mid + 1 has already been checked
      if (target > arr[mid]) {
        // Move to the right
        start = mid + 2;
      } else {
        // Move to the left
        end = mid - 2;
      }
    }

    return -1;
  }

  findTheOddOccuringElement(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = start + (end - start) / 2;

    while (start <= end) {
      if (start === end) {
        return start;
      }
      // Either mid index is even or odd
      let isMidEven = mid % 2 === 0;
      if (isMidEven) {
        // Check if the next number is same, thus a pair, thus on Line A
        if (arr[mid] === arr[mid + 1]) {
          // Line A
          // Answer exists at right
          start = mid + 2;
        } else {
          // Line B
          // Answer is either this or at left
          end = mid;
        }
      } else {
        // mid is odd
        if (arr[mid] === arr[mid - 1]) {
          // Line A
          // Answer exists at right
          start = mid + 1;
        } else {
          // Line B, answer is at left or here
          end = mid - 1;
        }
      }

      mid = start + (end - start) / 2;
    }

    return -1;
  }
}

const binarySearch = new BinarySearch();
const result = binarySearch.exponentialSearchElement([5], 5);
console.log("result", result);

// Testing the missing element answer
// const resultMissingNum = binarySearch.findMissingElementInSortedArray([
//   1, 2, 3, 4, 5, 6, 7,
// ]);
// console.log("resultMissingNum", resultMissingNum);

// const resultMountedPeak = binarySearch.findPeakElementInMountedArray([
//   10, 20, 30, 50, 60, 40, 30,
// ]);

// const pivot = binarySearch.search([16, 2, 4, 6, 8, 10, 11, 12, 13, 14, 15], 13);
// const squareRoot64 = binarySearch.findSquareRootUsingBinarySearch(66);
// const searchMatrixAns = binarySearch.searchMatrix(
//   [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ],
//   16
// );

// const divide = binarySearch.divideUsingBinarySearch(-2147483648, -1);
// const nearlySorted = binarySearch.binarySearchOnNearlySortedArray(
//   [20, 10, 30, 50, 40, 70, 60],
//   50
// );

// const oddOcurring = binarySearch.findTheOddOccuringElement([1]);

// // console.log("resultMountedPeak", resultMountedPeak);
// // console.log("pivot", pivot);
// // console.log("squareRoot64", squareRoot64);
// // console.log("searchMatrixAns", searchMatrixAns);
// // console.log("nearlySorted", nearlySorted);
// console.log("oddOcurring", oddOcurring);

// // console.log("divide", divide);

class Solution {
  rotate(arr, n) {
    //code here
    const lastElement = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
  }
  rotateByKElements(arr, n, k) {
    const toBePlacedAtHead = [];
    for (let i = 0; i < k; i++) {
      toBePlacedAtHead.unshift(arr[n - i - 1]);
    }
    // If arr is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] loop back from 9 --> 4
    for (let i = n - 1; i >= 1; i--) {
      arr[i] = arr[i - k];
    }

    for (let i = 0; i < toBePlacedAtHead.length; i++) {
      arr[i] = toBePlacedAtHead[i];
    }

    return arr;
  }

  leftShiftBy1(arr, n) {
    const firstElement = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }

    arr[n - 1] = firstElement;
    return arr;
  }
}

const solution = new Solution();
const result = solution.rotate([1, 2, 3, 4, 5], 5);
const result2 = solution.rotateByKElements(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  12,
  3
);
const resultLeftShift = solution.leftShiftBy1([1, 2, 3, 4, 5], 5);
console.log("result", result);
console.log("result2", result2);
console.log("resultLeftShift", resultLeftShift);

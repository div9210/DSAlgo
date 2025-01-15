/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // Using two pointer approach
  let i = 0;
  let j = arr.length - 1;
  while (j - i >= k) {
    let diffI = Math.abs(x - arr[i]);
    let diffJ = Math.abs(x - arr[j]);
    if (diffI < diffJ) {
      // Move J to the left
      j--;
    } else if (diffJ < diffI) {
      // Move I to the right
      i++;
    } else {
      j--;
    }
  }

  // Give me last k elements of the array
  return arr.slice(i, j + 1);
};

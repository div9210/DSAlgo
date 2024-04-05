/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
class Solution {
  getMinMax(arr, n) {
    //code here
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < n; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }

      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return [min, max];
  }
}

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

    for (let i = 0; i < n / 2; i++) {
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

const obj = new Solution();
const result = obj.getMinMax([3, 2, 1, 56, 10000, 167], 6);
console.log("result", result);

const array = [3, 2, 1, 56, 10000, 167];
array.sort((a, b) => a - b); // It will try to turn everything -ve
array.sort((a, b) => b - a); // It will try to turn everything +ve

const map = new Map();
map.set(200, 6);
map.set(4, 5);

const sortedMap = [...map.entries()].sort((a, b) => a[0] - b[0]);

console.log("sortedMap", sortedMap);

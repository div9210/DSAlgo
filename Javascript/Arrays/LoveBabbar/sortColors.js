/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
 */
class Solution {
  sort012(arr, N) {
    //your code here
    let l = 0;
    let r = N - 1;
    const result = new Array(N);
    for (let i = 0; i < N; i++) {
      if (arr[i] == 0) {
        result[l] = arr[i];
        l++;
      } else if (arr[i] == 2) {
        result[r] = arr[i];
        r--;
      }
    }

    for (let i = l; i <= r; i++) {
      result[i] = 1;
    }
    arr = result;
  }
}

const sol = new Solution();
const result = sol.sort012([2, 0, 2, 1, 1, 0], 6);
console.log("result", result);

class Solution {
  minJumps(arr, n) {
    for (let i = 0; i < n; i++) {
      arr[i] = arr[i] + 1;
    }
    var coveredDistance = 0;
    while (coveredDistance < n) {
      var start = coveredDistance;
      var end = arr[coveredDistance];

      while (start <= end) {
        if (arr[start] + start > end) {
          end = arr[start] + start;
        }
        start++;
      }
    }
  }
}

const sol = new Solution();
const result = sol.minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11);
console.log("result", result);

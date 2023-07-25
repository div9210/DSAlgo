class Solution {
  getPairsCount(arr, n, k) {
    //code here
    const map = new Map();
    let count = 0;
    for (let i = 0; i < n; i++) {
      let target = k - arr[i];
      if (map.has(target)) {
        count += map.get(target);
      }

      map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    return count;
  }
}

const sol = new Solution();
const result = sol.getPairsCount([1, 5, 5, 5, 5, 7], 6, 10);
console.log("result", result);

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
}

const solution = new Solution();
const result = solution.rotate([1, 2, 3, 4, 5], 5);
console.log("result", result);

class Solution {
  segregateElements(arr, n) {
    //code here
    const tempArr = [...arr];
    arr.fill(null);
    let l = 0;
    let r = n - 1;
    for (let i = 0; i < n; i++) {
      if (tempArr[i] > 0) {
        arr[l] = tempArr[i];
        l++;
      }

      if (tempArr[n - 1 - i] < 0) {
        arr[r] = tempArr[n - 1 - i];
        r--;
      }
    }
    return arr;
  }
}

const testArray = [1, -1, 3, 2, -7, -5, 11, 6];
const solution = new Solution();
const result = solution.segregateElements(testArray, testArray.length);
console.log("result", result);

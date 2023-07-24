class Solution {
  //Function to return the count of number of elements in union of two arrays.
  doUnion(a, n, b, m) {
    // code here
    const set = new Set();
    const mixedArray = [...a, ...b];
    for (let i = 0; i < mixedArray.length; i++) {
      if (!set.has(mixedArray[i])) {
        set.add(mixedArray[i]);
      }
    }
    return set.size;
  }

  doIntersection(a, n, b, m) {
    const set = new Set();
    // if n > m add b to set
    // else add a to set
    // iterate over the smaller array
    // if set has the element add it to the result array
    // return result array
    if (n > m) {
      for (let i = 0; i < n; i++) {
        set.add(a[i]);
      }
      for (let i = 0; i < m; i++) {
        if (set.has(b[i])) {
          set.add(b[i]);
        }
      }
    }

    if (m > n) {
      for (let i = 0; i < m; i++) {
        set.add(b[i]);
      }
      for (let i = 0; i < n; i++) {
        if (set.has(a[i])) {
          set.add(a[i]);
        }
      }
    }

    const result = [];
    for (let i = 0; i < n; i++) {
      if (set.has(a[i])) {
        result.push(a[i]);
      }
    }
    return result;
  }
}

const arr1 = [5, 3, 6];
const arr2 = [1, 2, 3, 4, 5];

const solution = new Solution();
const result = solution.doUnion(arr1, arr1.length, arr2, arr2.length);
const intersection = solution.doIntersection(
  arr1,
  arr1.length,
  arr2,
  arr2.length
);
console.log("result", result);
console.log("intersection", intersection);

class Solution {
  //Function to merge the arrays.
  merge(arr1, arr2, n, m) {
    // loop over arr1 and check the arr1[i] with first element of the arr2;
    // if arr2[0] < arr1[i]; swap the two elements;
    // sort the arr2
    for (let i = 0; i < n; i++) {
      if (arr1[i] > arr2[0]) {
        // Swapping
        const temp = arr1[i];
        arr1[i] = arr2[0];
        arr2[0] = temp;
      }
      arr2 = arr2.sort((a, b) => a - b);
    }
  }

  swapIfGreater(arr1, arr2, p1, p2) {
    if (arr2[p2] < arr1[p1]) {
      // Swap these two elements
      const temp = arr2[p2];
      arr2[p2] = arr1[p1];
      arr1[p1] = temp;
    }
  }

  mergeUsingGAP(arr1, arr2, n, m) {
    let maxLength = m + n;
    let gap = Math.ceil(maxLength / 2);
    while (gap > 0) {
      let left = 0;
      let right = left + gap;
      while (right < maxLength) {
        // There will be 3 conditions
        // based on current value for left and right

        // 1. Both left and right are in arr1
        if (left < n && right < n) {
          this.swapIfGreater(arr1, arr1, left, right);
        }

        // 2. left is in arr1 and right is in arr2
        else if (left < n && right >= n) {
          this.swapIfGreater(arr1, arr2, left, right - n);
        }

        // 3. both left and right are in arr2
        else if (left >= n && right >= n) {
          this.swapIfGreater(arr2, arr2, left - n, right - n);
        }
        left++;
        right++;
      }
      if (gap == 1) break;
      gap = Math.ceil(gap / 2);
    }
  }
}

const sol = new Solution();
const result = sol.mergeUsingGAP([1, 3, 5, 7], [0, 2, 6, 8, 9], 4, 5);
console.log("result", result);

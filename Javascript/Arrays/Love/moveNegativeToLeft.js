class Solution {
  segregateElements(arr, n) {
    // Take a right pointer and store negative numbers
    let rightPointer = n - 1;
    let leftPointer = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] >= 0) {
        this.swap(arr, i, leftPointer);
        leftPointer++;
      }
    }

    // for (let j = n - 1; j >= 0; j--) {
    //   if (arr[j] < 0) {
    //     this.swap(arr, j, rightPointer);
    //     rightPointer--;
    //   }
    // }
    console.log({ arr });
  }

  swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}

const sol = new Solution();
const result = sol.segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8);

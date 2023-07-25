class Solution {
  commonElements(arr1, arr2, arr3, n1, n2, n3) {
    //code here
    const commonElements = [];
    let p1 = 0; // arr1[p1]
    let p2 = 0; // arr2[p2]
    let p3 = 0; // arr3[p3]
    while (p1 < n1 || p2 < n2 || p3 < n3) {
      if ((arr1[p1] === arr2[p2]) === arr3[p3]) {
        commonElements.push(arr1[p1]);
      } else {
        // Smallest is arr1[p1]
        if (arr1[p1] <= arr2[p2] && arr1[p1] <= arr3[p3]) {
          p1++;
        }

        // Smallest is arr2[p2]
        else if (arr2[p2] <= arr1[p1] && arr2[p2] <= arr3[p3]) {
          p2++;
        }

        // Smallest is arr3[p3]
        else if (arr3[p3] <= arr1[p1] && arr3[p3] <= arr2[p2]) {
          p3++;
        }
      }
    }

    return commonElements;
  }
}

const solution = new Solution();
const result = solution.commonElements(
  [1, 5, 10, 20, 40, 80],
  [6, 7, 20, 80, 100],
  [3, 4, 15, 20, 30, 70, 80, 120],
  6,
  5,
  8
);
console.log("result", result);

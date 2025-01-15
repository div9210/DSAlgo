class Solution {
  commonElements(arr1, arr2, arr3, n1, n2, n3) {
    //code here
    const commonElements = [];
    let p1 = 0; // arr1[p1]
    let p2 = 0; // arr2[p2]
    let p3 = 0; // arr3[p3]
    while (p1 < n1 && p2 < n2 && p3 < n3) {
      let el1 = arr1[p1];
      let el2 = arr2[p2];
      let el3 = arr3[p3];
      if (arr1[p1] === arr2[p2] && arr1[p1] === arr3[p3]) {
        // Check if this element is already in the commonElements array
        // Since it will be sorted, the commonElements array will be sorted as well
        // Thus, the element we are about to insert will already exist in the array
        // at the last position if we added the same element before
        if (
          commonElements.length === 0 ||
          commonElements[commonElements.length - 1] !== arr1[p1]
        ) {
          commonElements.push(arr1[p1]);
        }
        p1++;
        p2++;
        p3++;
      } else {
        // Find the smallest element and increment the pointer for that array
        let smallest = Math.min(el1, el2, el3);
        if (smallest === el1) {
          p1++;
        } else if (smallest === el2) {
          p2++;
        } else {
          p3++;
        }
      }
    }

    return commonElements;
  }
}

const solution = new Solution();
const result = solution.commonElements(
  [-77, -69, -68, -39, -25, -6, 18, 33, 39, 42, 46, 52, 55, 55, 64, 71],
  [
    -97, -92, -90, -90, -87, -85, -82, -77, -77, -77, -75, -71, -67, -64, -60,
    -59, -58, -52, -49, -48, -48, -10, -6, -4, 2, 3, 9, 12, 15, 17, 20, 22, 23,
    24, 27, 29, 36, 36, 37, 38, 39, 42, 45, 47, 48, 48, 50, 52, 52, 53, 57, 59,
    60, 63, 63, 64, 64, 65, 68, 70, 71, 76, 76, 77, 83, 83, 84, 85, 86, 89, 97,
    97,
  ],
  [
    -95, -95, -86, -83, -70, -67, -57, -53, -52, -35, -33, -32, -30, -20, -16,
    -15, -15, -11, -10, -10, -4, 0, 4, 15, 18, 34, 36, 37, 39, 41, 43, 43, 48,
    49, 50, 51, 58, 63, 64, 67, 69, 77, 79, 84, 84, 94, 95, 97,
  ],
  15,
  88,
  48
);
console.log("result", result);

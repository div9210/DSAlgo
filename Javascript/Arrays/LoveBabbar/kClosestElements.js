class KClosestElements {
  findClosestElements(arr, k, x) {
    // Using two pointer approach
    let i = 0;
    let j = arr.length - 1;
    while (j - i >= k) {
      let diffI = Math.abs(x - arr[i]);
      let diffJ = Math.abs(x - arr[j]);
      if (diffI < diffJ) {
        // Move J to the left
        j--;
      } else if (diffJ < diffI) {
        // Move I to the right
        i++;
      } else {
        j--;
      }
    }

    // Give me last k elements of the array
    return arr.slice(i, j + 1);
  }

  usingBinarySearch(arr, k, x) {
    // Using Binary Search First get to the closest element
    let start = 0;
    let end = arr.length - 1;
    let closestEl = null;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Predicate function (closest from arr[start] and arr[end])
      if (arr[mid] >= x) {
        // Either i am at the closest or closest, or closest exists at left
        closestEl = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    if (closestEl !== null) {
      let l = closestEl - 1;
      let h = closestEl;
      while (k--) {
        if (l >= 0 && Math.abs(x - arr[l]) <= Math.abs(x - arr[h])) {
          l--;
        } else {
          if (h <= arr.length - 1) {
            h++;
          } else {
            l--;
          }
        }
      }

      return arr.slice(l + 1, h);
    } else {
      return [null];
    }
  }
}

const solution = new KClosestElements();
// const result = solution.usingBinarySearch(
//   [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56],
//   4,
//   35
// );

const result = solution.usingBinarySearch([-2, -1, 1, 2, 3, 4, 5], 7, 3);

console.log({
  result,
});

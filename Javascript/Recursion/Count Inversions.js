class CountInversion {
  merge(arr, start, end, mid, tempArrayToPerformMerge) {
    let i = start;
    let j = mid + 1;
    let fillIndex = start;
    let count = 0;

    while (i <= mid || j <= end) {
      // Check if i is out of bound
      if (i > mid) {
        // put j at fillIndex and move on
        tempArrayToPerformMerge[fillIndex] = arr[j];
        fillIndex++;
        j++;
        continue;
      }

      // Check if j is out of bound
      if (j > end) {
        // put i at fillIndex and move on
        tempArrayToPerformMerge[fillIndex] = arr[i];
        fillIndex++;
        i++;
        continue;
      }

      // If code reaches here that means both i and j are valid indexes
      // i --> left subarray
      // j --> right subarray
      if (arr[i] > arr[j]) {
        tempArrayToPerformMerge[fillIndex] = arr[j];
        // Also this is the case of inversion
        // so increase the inversion count
        count += mid - i + 1;

        fillIndex++;
        j++;
      } else {
        tempArrayToPerformMerge[fillIndex] = arr[i];
        fillIndex++;
        i++;
      }
    }

    // Now tempArrayToPerformMerge has sorted fusion array
    // So copy it to the original array
    while (start <= end) {
      arr[start] = tempArrayToPerformMerge[start];
      start++;
    }

    return count;
  }
  mergeSortInversions(arr, start, end, tempArrayToPerformMerge) {
    // base case
    if (start >= end) {
      return 0; // No inversion possible for invalid array
    }

    // create a count variable
    let countOfInversions = 0;
    let mid = Math.floor(start + (end - start) / 2);

    // Recursive call for left subarray
    countOfInversions += this.mergeSortInversions(
      arr,
      start,
      mid,
      tempArrayToPerformMerge
    );

    // Recursive call for right subarray
    countOfInversions += this.mergeSortInversions(
      arr,
      mid + 1,
      end,
      tempArrayToPerformMerge
    );

    countOfInversions += this.merge(
      arr,
      start,
      end,
      mid,
      tempArrayToPerformMerge
    );
    return countOfInversions;
  }
  run(arr) {
    let start = 0;
    let end = arr.length - 1;
    let tempArrayToPerformMerge = [];
    let count = this.mergeSortInversions(
      arr,
      start,
      end,
      tempArrayToPerformMerge
    );
    console.log("arr:", arr);
    return count;
  }
}

let countInversion = new CountInversion();
// let result = countInversion.run([
//   468, 335, 1, 170, 225, 479, 359, 463, 465, 206, 146, 282, 328, 462, 492, 496,
//   443, 328, 437, 392, 105, 403, 154, 293, 383, 422, 217, 219, 396, 448, 227,
//   272, 39, 370, 413, 168, 300, 36, 395, 204, 312, 323,
// ]);

let result = countInversion.run([2, 1, 3, 1, 2]);

console.log("result", result);

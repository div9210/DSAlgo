class Solution {
  minTime(arr, n, k) {
    // if (n < k) return -1;
    let sumTime = 0;
    for (let i = 0; i < n; i++) {
      sumTime += arr[i];
    }

    let start = 0;
    let end = sumTime;
    let ans = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Predicate function
      if (this.isPossibleSolution(arr, n, k, mid)) {
        ans = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return ans;
  }

  isPossibleSolution(boards, n, painters, solution) {
    let timeSpentTillNowByAPainter = 0;
    let currentPainter = 1;

    for (let i = 0; i < n; i++) {
      if (boards[i] > solution) {
        return false;
      }

      // Start the allocation
      timeSpentTillNowByAPainter += boards[i];
      if (timeSpentTillNowByAPainter > solution) {
        currentPainter++;
        if (currentPainter > painters) {
          return false;
        }

        timeSpentTillNowByAPainter = 0 + boards[i];
      }
    }

    return true;
  }
}

const solution = new Solution();
const result = solution.findPages([5], 1, 2);

console.log({
  result,
});

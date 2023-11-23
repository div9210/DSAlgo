class Solution {
  //Function to solve the problem.
  solve(n, k, stalls) {
    stalls.sort((a, b) => a - b);
    // if (n > k) return -1;

    // Search space is 0 --> stalls[n-1]
    let start = 0;
    let end = stalls[n - 1] - stalls[0];

    let ans = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Predicate function
      if (isPossibleSolution(stalls, n, k, mid)) {
        ans = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return ans;
  }

  isPossibleSolution(stalls, n, k, mid) {
    let positionOfCow = stalls[0];
    let currentCow = 1;
    for (let i = 1; i < n; i++) {
      if (stalls[i] - positionOfCow >= mid) {
        // Place the cow and move to the next cow
        currentCow++;
        positionOfCow = stalls[i];
      }

      if (currentCow == k) return true;
    }

    return false;
  }
}

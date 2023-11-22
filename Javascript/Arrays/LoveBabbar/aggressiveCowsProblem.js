class AggressiveCowsProblem {
  // GFG : https://www.geeksforgeeks.org/problems/aggressive-cows/0

  usingBinarySearch(n, k, stalls) {
    //your code here
    let totalDistance = 0;
    for (let i = 0; i < n; i++) {
      totalDistance += stalls[i];
    }

    // Now that you have the total distance the search space is defined as
    // 0 --> totalDistance
    // max distance that can be allocated is between this only
    let start = 0;
    let end = totalDistance;
    let ans = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Predicate function
      if (isPossibleSolution(cows, stalls, mid)) {
        start = mid + 1;
        ans = mid;
      } else {
        end = mid - 1;
      }
    }

    return ans;
  }

  isPossibleSolution(stallDistances, cows, maxDistanceForThisSolution) {
    let currentCow = 1;
    let distanceAllocatedTillNow = 0;
    for (let i = 0; i < stallDistances.length; i++) {
      if (stallDistances[i] > maxDistanceForThisSolution) {
        return false;
      }

      // If code reaches here, start the allocation
      distanceAllocatedTillNow += stallDistances[i];
      if (distanceAllocatedTillNow > maxDistanceForThisSolution) {
        currentCow++;
        if (currentCow > cows) {
          return false;
        }
        // For this cow the distance till now is again reset
        distanceAllocatedTillNow = stallDistances[i];
      }
    }

    return true;
  }
}

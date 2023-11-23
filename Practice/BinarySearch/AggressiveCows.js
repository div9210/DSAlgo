class Solution {
  //Function to solve the problem.
  solve(n, k, stalls) {
    // The search space of distance that can exist between the cows is
    // Sort the stalls
    stalls.sort((a, b) => a - b);
    let start = 0;
    let end = stalls[n - 1] - stalls[0];
    let answer = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (this.isMidDistanceAmongCowsPossible(stalls, n, k, mid)) {
        answer = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return answer;
  }

  isMidDistanceAmongCowsPossible(stalls, n, cows, minDistance) {
    let mostRecentCowPositionedAt = stalls[0];
    let currentCow = 1;

    // Since the first cow is default placed. We will start the loop from 1st Index
    for (let i = 1; i < n; i++) {
      let distanceAchievedAtThisStall = stalls[i] - mostRecentCowPositionedAt;
      if (distanceAchievedAtThisStall >= minDistance) {
        // Place the cow
        currentCow++;
        mostRecentCowPositionedAt = stalls[i];
      }

      // if at any point we have placed all cows\
      // Hoorayyyyyyy
      if (currentCow === cows) {
        return true;
      }
    }

    return false;
  }
}

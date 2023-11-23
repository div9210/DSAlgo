class Solution {
  findMinTime(pratas, cooks, ranks) {
    // Find the least efficient cook's rank
    // let leastEfficientRank = Math.max(...ranks);
    ranks = ranks.sort((a, b) => a - b);
    let leastEfficientRank = ranks[ranks.length - 1];

    // So time taken by the least efficient cook to make all the pratas would be
    let worstTime = (leastEfficientRank * pratas * (pratas + 1)) / 2;

    // So that is our search space 0 --> worstTime
    let start = 0;
    let end = worstTime;
    let answer = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Predicate function
      if (this.isPossibleSolution(pratas, cooks, ranks, mid)) {
        answer = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return answer;
  }

  isPossibleSolution(pratas, cooks, ranks, maxTime) {
    let currentCook = 1;
    let timeAllocated = 0;
    let cookParataNumber = 0;

    // Since ranks are in the most sorted order, we will move from most efficient to least efficient
    for (let cuurentPrata = 1; cuurentPrata <= pratas; cuurentPrata++) {
      ++cookParataNumber;
      timeAllocated += ranks[currentCook - 1] * cookParataNumber;

      if (timeAllocated > maxTime) {
        // Move to the next cook
        currentCook++;
        if (currentCook > cooks) return false;

        // Reset all the values for the new cook
        cookParataNumber = 1;
        timeAllocated = 0 + ranks[currentCook - 1] * cookParataNumber;
      }
    }

    return true;
  }
}

const sol = new Solution();
const testCase1 = sol.findMinTime(8, 8, [1, 1, 1, 1, 1, 1, 1, 1]);

console.log({
  testCase1,
});

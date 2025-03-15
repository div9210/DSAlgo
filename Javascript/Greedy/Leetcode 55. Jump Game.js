/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Here we see that the last index is the position we want i.e target
  // But any position before that can reach the target is itself a target
  // which means any position that can reach the last index if someone reaches that index
  // he/she can be sure that the last index will be reached
  // and similarly any index that can reach our updated target also has the
  // surity to reach the final target.

  // Let's reverse engineer the solution
  let n = nums.length;
  if (n == 1) return true;

  let targetIndex = n - 1;
  let currIndex = n - 2;
  while (currIndex) {
    let reachOfCurr = currIndex + nums[currIndex];

    // If we can reach the target, then we are the target
    // for anyone before us
    if (reachOfCurr >= targetIndex) {
      targetIndex = currIndex;
    }

    // Now go backwards to check, if target is reachable
    currIndex--;
  }

  return currIndex + nums[currIndex] >= targetIndex;
};

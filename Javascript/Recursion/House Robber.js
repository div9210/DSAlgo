function solve(nums, start, end) {
  if (start > end) {
    return 0;
  }

  // Either include the start element or don't include it
  // 1. Including the nums[start]
  let inclusionRobbery = nums[start] + solve(nums, start + 2, end);

  // 2. Exculding the nums[start]
  let exclusionRobbery = 0 + solve(nums, start + 1, end);

  return Math.max(inclusionRobbery, exclusionRobbery);
}

var rob = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let maxRobbed = solve(nums, start, end);
  return maxRobbed;
};

let nums = [1, 2, 3, 1];
console.log(rob(nums));

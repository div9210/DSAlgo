/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // Floyd's hare and tortoise algorithm
  let hare = nums[0];
  let tortoise = nums[0];

  // Make initial movements
  hare = nums[nums[hare]]; // 2 Jumps
  tortoise = nums[tortoise]; // 1 Jump

  // Keep racing till you meet
  while (hare != tortoise) {
    hare = nums[nums[hare]]; // 2 Jumps
    tortoise = nums[tortoise]; // 1 Jump
  }

  // When you meet reset the hare
  hare = nums[0];
  // Now race with same speed till these meet again
  while (hare != tortoise) {
    hare = nums[hare];
    tortoise = nums[tortoise];
  }

  // When they meet again, you have the ans
  // return anyone of them
  return hare;
};

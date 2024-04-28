/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // Let's use Floyd Cycle Detection Algorithm here
  let tortoise = nums[0];
  let rabbit = nums[0];

  // Take initial movements
  tortoise = nums[tortoise];
  rabbit = nums[nums[rabbit]];

  // Continue their movements till they meet for the first time
  while (rabbit != tortoise) {
    tortoise = nums[tortoise];
    rabbit = nums[nums[rabbit]];
  }

  // After they meet, reset rabbit, and race at same pace till they meet again
  rabbit = nums[0]; // Reset
  while (rabbit != tortoise) {
    tortoise = nums[tortoise];
    rabbit = nums[rabbit];
  }
  return rabbit;
};

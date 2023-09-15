function secondLargestAndSecondSmallest(nums) {
  let max = nums[0];
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    max = max > nums[i] ? max : nums[i];
    min = min < nums[i] ? min : nums[i];
  }

  // Traverse back the array except for max and min
  let secondMax = min;
  let secondMin = max;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max && nums[i] > secondMax) {
      secondMax = nums[i];
    }

    if (nums[i] !== min && nums[i] < secondMin) {
      secondMin = nums[i];
    }
  }

  return [secondMax, secondMin];
}

const result = secondLargestAndSecondSmallest([1, 1, 2, 3, 4, 5, 5]);
console.log("result", result);

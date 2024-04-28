var twoSum = function (nums, target) {
  let hashedMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let toMatchTarget = target - nums[i];
    if (hashedMap.has(toMatchTarget)) {
      let foundIndex = hashedMap.get(toMatchTarget);
      return [i, foundIndex];
    } else {
      hashedMap.set(nums[i], i);
    }
  }
};

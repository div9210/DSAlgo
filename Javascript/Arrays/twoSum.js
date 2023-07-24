var twoSum = function (nums, target) {
  // Make a hashed map to store {num(key): index(value)} order
  const map = new Map();
  // loop over the array
  for (let i = 0; i < nums.length; i++) {
    const toFindTarget = target - nums[i];
    if (map.has(toFindTarget)) {
      return [i, map.get(toFindTarget)];
    } else {
      map.set(nums[i], i);
    }
  }

  return null;
};

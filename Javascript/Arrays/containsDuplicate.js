var containsDuplicate = function (nums) {
  let hashedSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hashedSet.has(nums[i])) {
      return true;
    } else {
      hashedSet.add(nums[i]);
    }
  }

  return false;
};

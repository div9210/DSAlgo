var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedArray.slice(0, k).map((el) => el[0]);
};

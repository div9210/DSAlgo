var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums.length;
  }
  let result = [];
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i] - 1 || nums[i + 1] === nums[i] + 1) {
      result.push(nums[i]);
      if (i === nums.length - 1) return result.length;
    } else {
      if (result.length > max) {
        max = result.length;
      }
      result = [];
    }
  }

  return max;
};

const result = longestConsecutive([1, 2, 0, 1]);
console.log("result", result);

var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let hashedSet = new Set(nums);
  let longestSequence = [];
  for (let i = 0; i < nums.length; i++) {
    let longest = 0;
    if (!hashedSet.has(nums[i] - 1)) {
      longest++;

      if (hashedSet.has(nums[i] + 1)) {
        let nextValue = nums[i] + 1;
        while (hashedSet.has(nextValue)) {
          longest++;
          nextValue++;
        }
      }
    }

    if (longest != 0) {
      if (longestSequence.length > 0) {
        longestSequence[longestSequence.length - 1] < longest
          ? longestSequence.push(longest)
          : longestSequence.unshift(longest);
      } else {
        longestSequence.push(longest);
      }
    }
  }

  return longestSequence[longestSequence.length - 1];
};

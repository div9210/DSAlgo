function findMissingWithDuplicates(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    // Treating nums[i] value as position (only taking the positive nums[i] value)
    // And making forcefully positive for values that has been visited (already -ve)
    let index = nums[i] > 0 ? nums[i] - 1 : -1 * nums[i] - 1;
    // Mark the index as visited (Multiply with -1)
    // If that is already visited i.e already -ve skip
    if (nums[index] < 0) {
      continue;
    } else {
      nums[index] = -1 * nums[index];
    }
  }

  // Loop and check for positive numbers
  let result = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return { result, nums };
}

const result = findMissingWithDuplicates([1, 3, 5, 3, 4]);
console.log("result", result);

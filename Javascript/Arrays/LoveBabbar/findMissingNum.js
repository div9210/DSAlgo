function findMissingWithDuplicates(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let index = nums[i] - 1;
    // Mark the index as visited (Multiply with -1)
    // If that is already visited i.e already -ve skip
    if (nums[index] < 0) {
      continue;
    } else {
      nums[index] = -1 * nums[index];
    }
  }

  // Loop and check for a positive number
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return -1;
}

const result = findMissingWithDuplicates([1, 3, 5, 3, 4]);
console.log("result", result);

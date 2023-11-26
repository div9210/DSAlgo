var findPeakElement = function (nums) {
  if (nums.length == 1) return 0;
  let start = 0;
  let end = nums.length - 1;
  let ans = end;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    // Check for the anamolies
    if (nums[mid + 1] < nums[mid]) {
      // Either i am the peak or the answer exists at left
      ans = mid;
      end = mid - 1;
    } else if (nums[mid - 1] > nums[mid]) {
      // Either mid-1 was the peak or the answer exists at left
      ans = mid - 1;
      end = mid - 1;
    } else {
      // Always go to the right, No matter which sorted sub array element you currently are on
      start = mid + 1;
    }
  }

  return ans;
};

const result = findPeakElement([6, 5, 4, 3, 2, 3, 2]);
console.log({
  result,
});

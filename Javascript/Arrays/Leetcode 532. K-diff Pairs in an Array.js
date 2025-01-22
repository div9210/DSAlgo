/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  // Start with the window with
  let i = 0;
  let j = i + 1;
  // while j doesn't reach the end
  let pairsCount = 0;
  while (j < nums.length) {
    if (i === j) {
      j++;
    }
    let diff = Math.abs(nums[j] - nums[i]);
    if (diff === k) {
      pairsCount++;

      // Alternate to this while loop approach we could have kept a Set which stores a pair,
      // So it will automatically neglect a pair if that has been already inserted in the set.
      // But My approach does not even let them compare till they are equal
      while (nums[i] === nums[i + 1] && nums[j] === nums[j + 1]) {
        i++;
        j++;
      }
      i++;
      j++;
    } else if (diff < k) {
      j++;
    } else {
      i++;
    }
  }

  return pairsCount;
};

var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let toBeFound = k + nums[i];
    let start = i + 1;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (nums[mid] === toBeFound) {
        ans++;
        break;
      } else if (nums[mid] > toBeFound) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
};

var findDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    } else {
      set.add(nums[i]);
    }
  }
};

// Solution 2
function findDuplicate2(nums) {
  let n = nums.length;
  let sum = (n * (n - 1)) / 2;

  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }

  return -1 * sum;
}

const result2 = findDuplicate2([3, 1, 3, 4, 2]);
console.log("result2", result2);

function findDuplicate3(nums) {
  let n = nums.length;
  let sum = (n * (n - 1)) / 2;
  let arraySumWithExtra = 0;

  for (let i = 0; i < n; i++) {
    arraySumWithExtra += nums[i];
  }

  return arraySumWithExtra - sum;
}

const result3 = findDuplicate3([3, 1, 3, 4, 2]);
console.log("result3", result3);

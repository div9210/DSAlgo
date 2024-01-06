var lengthOfLIS = function (nums) {
  let length = 0;
  let ans = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      length++;
    } else {
      ans = Math.max(length, ans);
      length = 0;
    }
  }

  return ans;
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
let res = lengthOfLIS(nums);
console.log("res", res);

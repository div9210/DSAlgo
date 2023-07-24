// Time: 107ms
// Memory: 52.47mb

var productExceptSelf = function (nums) {
  let prod = 1;
  const zeroIndexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      prod *= nums[i];
    } else {
      zeroIndexes.push(i);
    }
  }

  if (zeroIndexes.length === nums.length || zeroIndexes.length > 1) {
    return nums.fill(0);
  }

  if (zeroIndexes.length > 0) {
    nums.fill(0);
    zeroIndexes.forEach((i) => {
      nums[i] = prod;
    });
    return nums;
  } else {
    nums = nums.map((num) => prod / num);
    return nums;
  }
};
const result = productExceptSelf([0, 0]);
console.log("result", result);

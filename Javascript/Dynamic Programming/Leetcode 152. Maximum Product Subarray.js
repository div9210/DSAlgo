/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let leftProd = 1,
    rightProd = 1,
    maxProd = nums[0];
  for (let i = 0; i < nums.length; i++) {
    leftProd = leftProd == 0 ? 1 : leftProd;
    rightProd = rightProd == 0 ? 1 : rightProd;

    leftProd = leftProd * nums[i];
    rightProd = rightProd * nums[nums.length - i - 1];

    maxProd = Math.max(leftProd, rightProd, maxProd);
  }

  return maxProd;
};

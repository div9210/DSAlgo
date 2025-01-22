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
// const result = productExceptSelf([0, 0]);
// console.log("result", result);

var productExceptSelfWithoutDivision = function (nums) {
  let productArray = new Array(nums.length).fill(1);
  let productAtLeft = 1;
  // Moving from left to right storing prod of numbers at left of i
  for (let i = 0; i < nums.length; i++) {
    productArray[i] = productAtLeft; // Update the values
    productAtLeft = productAtLeft * nums[i];
  }

  // Moving from right to left storing prod of numbers at right of i
  let productAtRight = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    productArray[i] = productArray[i] * productAtRight; // We will get preupdated values
    productAtRight = productAtRight * nums[i];
  }

  console.log("productArray", productArray);
};

productExceptSelfWithoutDivision([1, 2, 3, 4, 5]);

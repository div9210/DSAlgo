var rearrangeArray = function (nums) {
  let positiveFill = 0;
  let negativeFill = 1;
  let result = [];
  let i = 0;

  while (i < nums.length) {
    if (nums[i] < 0) {
      result[negativeFill] = nums[i];
      negativeFill += 2;
    } else {
      result[positiveFill] = nums[i];
      positiveFill += 2;
    }
    i++;
  }

  return result;
};

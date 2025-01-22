var largestNumber = function (nums) {
  // Convert from int array to string array
  nums = nums.map((num) => num.toString());

  // Do the lexicographical sorting
  nums.sort((a, b) => {
    let t1 = a + b;
    let t2 = b + a;
    return t2.localeCompare(t1);
  });

  let maxLen = -1;
  nums.forEach((el) => {
    if (el.length > maxLen) {
      maxLen = el.length;
    }
  });

  let resultString = "";
  for (let i = 0; i < nums.length; i++) {
    resultString += nums[i];
  }

  return resultString;
};

let nums = [3, 30, 34, 5, 9];
console.log(largestNumber(nums));

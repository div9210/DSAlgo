var findMatrix = function (nums) {
  let i = 0;
  let mi = 0;
  let matrix = [new Set()];
  while (i < nums.length) {
    if (!matrix[mi]) {
      matrix[mi] = new Set();
      continue;
    } else {
      if (matrix[mi].has(nums[i])) {
        mi++;
        continue;
      } else {
        matrix[mi].add(nums[i]);
        mi = 0;
        i++;
      }
    }
  }

  return matrix.map((set) => [...set]);
};

const result = findMatrix([1, 3, 4, 1, 2, 3, 1]);
console.log("result", result);

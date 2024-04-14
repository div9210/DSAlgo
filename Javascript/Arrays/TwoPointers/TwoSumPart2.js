var twoSum = function (numbers, target) {
  // Given the numbers are sorted
  // We can use two pointers
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else {
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }
    }
  }
};

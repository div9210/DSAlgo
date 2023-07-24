var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (height[left] <= height[right]) {
      right--;
    } else if (height[left] < height[right]) {
      left++;
    }
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
};

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    let maxArea = (right - left) * Math.min(height[right], height[left]);
    if (height[left] > height[right]) right--;
    else if (height[left] <= height[right]) left++;
    res = Math.max(res, maxArea);
  }
  return res;
};

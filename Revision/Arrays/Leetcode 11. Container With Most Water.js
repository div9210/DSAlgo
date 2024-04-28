/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftBar = 0;
  let rightBar = height.length - 1;

  let maxA = -1;
  while (leftBar < rightBar) {
    // Calculate width
    let w = rightBar - leftBar;
    // Calculate height
    let leftHeight = height[leftBar];
    let rightHeight = height[rightBar];
    let h = Math.min(leftHeight, rightHeight);

    let area = w * h;
    maxA = Math.max(maxA, area);

    // Update leftBar and rightBar position
    // As per conditions
    if (leftHeight > rightHeight) rightBar--;
    else leftBar++;
  }

  return maxA;
};

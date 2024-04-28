/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  let n = heights.length;
  if (n < 3) return 0;

  let maxLeftHeight = 0;
  let maxRightHeight = 0;

  let maxHLeftForEachPoint = new Array(n).fill(0);
  let maxHRightForEachPoint = new Array(n).fill(0);

  let lp = 1;
  let rp = n - 2;

  while (inBound(lp)) {
    let immediateLeftHeight = heights[lp - 1];
    // Check if this immediate left height is the max till now
    maxLeftHeight = Math.max(maxLeftHeight, immediateLeftHeight);
    // Also store it in maxHLeftForEachPoint
    maxHLeftForEachPoint[lp] = maxLeftHeight;

    lp++;
  }

  while (inBound(rp)) {
    let immediateRightHeight = heights[rp + 1];
    // Check if this immediate right height is the max till now
    maxRightHeight = Math.max(maxRightHeight, immediateRightHeight);
    // Also store it in maxHLeftForEachPoint
    maxHRightForEachPoint[rp] = maxRightHeight;

    rp--;
  }

  // By now i have maxHLeftForEachPoint & maxHRightForEachPoint
  // And i had heights already, so we have everything for our water trapping formula
  return trappedWater(maxHLeftForEachPoint, maxHRightForEachPoint, heights);

  function inBound(index) {
    return index >= 0 && index < n;
  }
  function trappedWater(leftMaxHeights, rightMaxHeights, heights) {
    let totalTrappedWater = 0;
    for (let i = 0; i < n; i++) {
      let ounce = Math.min(leftMaxHeights[i], rightMaxHeights[i]) - heights[i];
      if (ounce > 0) {
        totalTrappedWater += ounce;
      }
    }

    return totalTrappedWater;
  }
};

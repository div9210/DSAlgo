var trap = function (height) {
  let leftPointers = [0];
  let rightPointers = [0];
  let maxLeftHeight = 0;
  let maxRightHeight = 0;
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > maxLeftHeight) {
      leftPointers.push(height[i - 1]);
      maxLeftHeight = height[i - 1];
    } else {
      leftPointers.push(maxLeftHeight);
    }
  }

  for (let i = height.length - 2; i >= 0; i--) {
    if (height[i + 1] > maxRightHeight) {
      rightPointers.push(height[i + 1]);
      maxRightHeight = height[i + 1];
    } else {
      rightPointers.push(maxRightHeight);
    }
  }

  return calculateTrappedwater(leftPointers, rightPointers.reverse(), height);
};

function calculateTrappedwater(leftPointers, rightPointers, heights) {
  let trappedwater = 0;
  for (i = 0; i < heights.length; i++) {
    const ounceTrapped =
      Math.min(leftPointers[i], rightPointers[i]) - heights[i];
    if (ounceTrapped > 0) {
      trappedwater += ounceTrapped;
    }
  }

  return trappedwater;
}

const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log("result", result);

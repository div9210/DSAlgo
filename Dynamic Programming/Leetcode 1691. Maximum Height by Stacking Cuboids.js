/**
 * @param {number[][]} cuboids
 * @return {number}
 */
function canCuboidBePlaced(top, bottom) {
  return top[0] <= bottom[0] && top[1] <= bottom[1] && top[2] <= bottom[2];
}

function PatternLIS(cuboids) {
  // Space Optimization
  let n = cuboids.length;
  let next = Array(n + 1).fill(0);
  let curr = Array(n + 1).fill(0);

  // Base Case : returns 0, but my whole array is zero. So no need
  for (let currIndex = n - 1; currIndex >= 0; currIndex--) {
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      let include = 0;
      if (
        prevIndex == -1 ||
        canCuboidBePlaced(cuboids[prevIndex], cuboids[currIndex])
      ) {
        // cuboids[currIndex] > cuboids[prevIndex]
        // include = 1 + next[currIndex + 1];
        include = cuboids[currIndex][2] + next[currIndex + 1];
      }

      let exclude = 0 + next[prevIndex + 1];

      curr[prevIndex + 1] = Math.max(include, exclude);
    }

    next = curr;
  }

  return next[0];
}

var maxHeight = function (cuboids) {
  // Sort all of the cuboids
  for (let i = 0; i < cuboids.length; i++) {
    cuboids[i].sort((a, b) => a - b);
  }

  cuboids.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });

  let solveFromLIS = PatternLIS(cuboids);

  return solveFromLIS;
};

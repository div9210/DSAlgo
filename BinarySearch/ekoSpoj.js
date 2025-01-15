class Solution {
  solve(trees, n, requiredWood) {
    // Height search space
    trees.sort((a, b) => a - b);
    let end = trees[n - 1];
    let start = 0;
    let ans = -1;
    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Predicate function
      if (this.gotRequiredWood(trees, n, requiredWood, mid)) {
        // Either this is the answer or the answer exists at right
        ans = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return ans;
  }

  gotRequiredWood(trees, n, requiredWood, sawBladeHeight) {
    let woodCutTillNow = 0;
    for (let i = 0; i < n; i++) {
      if (trees[i] > sawBladeHeight) {
        woodCutTillNow += trees[i] - sawBladeHeight;
      }
    }

    if (woodCutTillNow >= requiredWood) {
      return true;
    } else {
      return false;
    }
  }
}

const sol = new Solution();
const testCase1 = sol.solve([4, 42, 40, 26, 46], 5, 20);

console.log({
  testCase1,
});

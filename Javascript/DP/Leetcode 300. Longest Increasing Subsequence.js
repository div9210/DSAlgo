/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let prevIndex = -1;
  let currIndex = 0;

  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(nums.length + 1).fill(-1));

  let result = solve(nums, currIndex, prevIndex);
  return result;

  function solve(nums, currIndex, prevIndex) {
    if (currIndex > nums.length) return 0;

    // Check if dp has the answer
    // But Imp Note : Sometimes in dp the index initializes with -1
    // Like in this case prevIndex is initialized with -1
    // in that case no wants to know the answer of index -1 thus we do something called
    // "Index Shifting". Which means just add 1 to the index where -1 can appear i.e prevIndex
    if (dp[currIndex][prevIndex + 1] != -1) {
      return dp[currIndex][prevIndex + 1];
    }

    let include = 0;

    if (prevIndex == -1 || nums[currIndex] > nums[prevIndex]) {
      include = 1 + solve(nums, currIndex + 1, currIndex);
    }

    let exclude = 0 + solve(nums, currIndex + 1, prevIndex);

    dp[currIndex][prevIndex + 1] = Math.max(include, exclude);
    return dp[currIndex][prevIndex + 1];
  }
};

var lengthOfLIS = function (nums) {
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(nums.length + 1).fill(0));

  // Base Case : returns 0, but my whole array is zero. So no need
  for (let currIndex = nums.length - 1; currIndex >= 0; currIndex--) {
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      let include = 0;

      if (prevIndex == -1 || nums[currIndex] > nums[prevIndex]) {
        include = 1 + dp[currIndex + 1][currIndex + 1];
      }

      let exclude = 0 + dp[currIndex + 1][prevIndex + 1];

      dp[currIndex][prevIndex + 1] = Math.max(include, exclude);
    }
  }

  return dp[0][0];
};

var lengthOfLIS = function (nums) {
  let next = Array(nums.length + 1).fill(0);
  let curr = Array(nums.length + 1).fill(0);

  // Base Case : returns 0, but my whole array is zero. So no need
  for (let currIndex = nums.length - 1; currIndex >= 0; currIndex--) {
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      let include = 0;

      if (prevIndex == -1 || nums[currIndex] > nums[prevIndex]) {
        include = 1 + next[currIndex + 1];
      }

      let exclude = 0 + next[prevIndex + 1];

      curr[prevIndex + 1] = Math.max(include, exclude);
    }

    next = curr;
  }

  return next[0];
};

// Binary Search
var lengthOfLIS = function (nums) {
  let ans = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let currNum = nums[i];

    if (currNum > ans[ans.length - 1]) {
      // We can push the currNum in the ans
      ans.push(currNum);
    } else {
      // Find the first value in the ans that is bigger than the currentNum
      let index = ans.findIndex((v) => v >= currNum);
      // Replace that value with currNum
      ans[index] = currNum;
    }
  }

  return ans.length;
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));

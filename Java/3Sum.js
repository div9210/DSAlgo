/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Data Structures & Algorithms: Two Pointers
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log("nums", nums);

  const resultTriplets = [];
  const usedInTriplets = new Set();
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    // Perform 2 sum in the remaining array for - a
    const hashedMap = new Map();
    const targetSum = a == 0 ? 0 : -1 * a;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[j - 1]) {
        continue;
      }
      const toReachTarget = targetSum - nums[j];
      if (hashedMap.has(toReachTarget)) {
        const triplet = [a, toReachTarget, nums[j]];
        // Before pushing check if all 3 of them exists in usedInTriplets
        resultTriplets.push(triplet);

        usedInTriplets.add(a);
        usedInTriplets.add(toReachTarget);
        usedInTriplets.add(nums[j]);
      } else {
        hashedMap.set(nums[j], j);
      }
    }
  }

  return resultTriplets;
};

// const testCase = [-1, 0, 1, 2, -1, -4];
// const testCase = [0, 0, 0, 0, 0];
const testCase = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
console.log("Result: ", threeSum(testCase));

const resultAnswer = [
  [-4, 0, 4], // Found
  [-4, 1, 3], // Found
  [-3, -1, 4],
  [-3, 0, 3],
  [-3, 1, 2],
  [-2, -1, 3],
  [-2, 0, 2],
  [-1, -1, 2],
  [-1, 0, 1],
];

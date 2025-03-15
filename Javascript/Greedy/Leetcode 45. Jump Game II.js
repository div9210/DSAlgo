/**
 * @param {number[]} nums
 * @return {number}
 */
// Intuitive
var jump = function (nums) {
  // Understand the problem
  // This is more like cheapest flight within k stops
  // Put the first index in the queue, extract and
  // visit every other possible position from there
  // Continue the process and whosoever reaches the last index first
  // must have reached fastest i.e in very less number of steps

  let n = nums.length;
  let q = [[0, 0]]; // [index, steps]
  let visitedIndex = new Array(n).fill(false);
  visitedIndex[0] = true; // Since [0,0] is already in queue

  let front = 0;
  while (front < n) {
    // Extract the front element from the queue i.e dequeue
    let [index, steps] = q.shift();
    front++;

    if (index == n - 1) {
      // Reached target woo! hoo!
      return steps;
    }

    // Visit every position from this position to maxReach
    for (let i = 0; i <= nums[index]; i++) {
      let jumpTo = index + i;
      // Push in queue, if not already present
      // Bcz if it is already present that means this index is already
      // visited by someone better, who visited this index earlier than us
      if (!visitedIndex[jumpTo]) {
        q.push([jumpTo, steps + 1]);
        visitedIndex[jumpTo] = true;
      }
    }
  }

  // if still couldn't fine the answer
  return -1;
};

// Super Greedy
// var jump = function (nums) {
//   let left = 0,
//     right = 0;
//   let jumps = 0;
//   while (right < nums.length - 1) {
//     let longestJump = 0;
//     // Find the longestJump in left - right range
//     for (let i = left; i <= right; i++) {
//       longestJump = Math.max(longestJump, i + nums[i]);
//     }

//     left = right + 1;
//     right = longestJump;
//     jumps++;
//   }

//   return jumps;
// };

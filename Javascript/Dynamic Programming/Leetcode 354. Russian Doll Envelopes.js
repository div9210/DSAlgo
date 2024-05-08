// /**
//  * @param {number[][]} envelopes
//  * @return {number}
//  */

// var maxEnvelopes = function (envelopes) {
//   envelopes.sort((a, b) => {
//     if (a[0] !== b[0]) return a[0] - b[0];
//     if (a[1] !== b[1]) return a[1] - b[1];
//     return a[2] - b[2];
//   });

//   let resultFromLIS = PatternLIS(envelopes);
//   return resultFromLIS;
// };

// function check(small, big) {
//   return small[0] < big[0] && small[1] < big[1];
// }

// function PatternLIS(cuboids) {
//   // Space Optimization
//   let n = cuboids.length;
//   let next = Array(n + 1).fill(0);
//   let curr = Array(n + 1).fill(0);

//   // Base Case : returns 0, but my whole array is zero. So no need
//   for (let currIndex = n - 1; currIndex >= 0; currIndex--) {
//     for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
//       let include = 0;
//       if (prevIndex == -1 || check(cuboids[prevIndex], cuboids[currIndex])) {
//         include = 1 + next[currIndex + 1];
//       }

//       let exclude = 0 + next[prevIndex + 1];

//       curr[prevIndex + 1] = Math.max(include, exclude);
//     }

//     next = curr;
//   }

//   return next[0];
// }

/**
 * @param {number[][]} envelopes
 * @return {number}
 */

function check(small, big) {
  return small[0] < big[0] && small[1] < big[1];
}

// Binary Search
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });

  console.log(envelopes);

  let result = [envelopes[0]];

  for (let i = 1; i < envelopes.length; i++) {
    let currentEnv = envelopes[i];
    if (check(result[result.length - 1], currentEnv)) {
      result.push(currentEnv);
    } else {
      // Search the just bigger number in the result
      let index = result.findIndex((env) => check(currentEnv, env));
      // Replace it
      result[index] = currentEnv;
    }
  }

  return result.length;
};

let envelopes = [
  [2, 100],
  [3, 200],
  [4, 300],
  [5, 500],
  [5, 400],
  [5, 250],
  [6, 370],
  [6, 360],
  [7, 380],
];

let result = maxEnvelopes(envelopes);
console.log("result", result);

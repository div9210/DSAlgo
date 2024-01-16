const { Stack } = require("./Stack");

// My Aproach : TLE (Time Limit Exceeded)
var largestRectangleArea = function (heights) {
  if (heights.length == 0) {
    return -1;
  }
  let maxArea = -1;
  for (let i = 0; i < heights.length; i++) {
    // Calculate expandable width for each iteration
    let left = i;
    let right = i;
    while (left >= 0 && heights[left - 1] && heights[left - 1] >= heights[i]) {
      left--;
    }

    while (
      right < heights.length &&
      heights[right + 1] &&
      heights[right + 1] >= heights[i]
    ) {
      right++;
    }

    // Now you have both expanded left and right
    let width = right - left + 1;
    let height = heights[i];
    let area = width * height;
    maxArea = maxArea > area ? maxArea : area;
  }

  return maxArea;
};

let heights = [2, 1, 5, 6, 2, 3];
// console.log(largestRectangleArea(heights));

// Stack Approach
// If you see the question clearly, you stop expanding the array once you reach
// first smaller element each side (left and right)
// In stack we have already solved questions
// 1. Find min at right
// 2. Find min at left
// Now using that to form my approach
// Rather than keeping the element in the stack keep index
function leftMin(arr) {
  let stack = new Stack();
  stack.push(-1);
  let ansArray = []; // Since we are storing indexes thus losing elements, so we cannot change in place

  // Iterating forwards
  for (let i = 0; i < heights.length; i++) {
    let curr = arr[i];
    // Run while you don't find a smaller element index in stack
    while (!stack.isEmpty() && arr[stack.peek()] && arr[stack.peek()] >= curr) {
      stack.pop();
    }
    // When u successfully found a smaller element
    // Now u can keep your curr at the stack top
    ansArray[i] = stack.peek();
    stack.push(i); // store the index not element
  }
  return ansArray;
}

function rightMin(arr) {
  let stack = new Stack();
  stack.push(arr.length);
  let ansArray = []; // Since we are storing indexes thus losing elements, so we cannot change in place

  // Iterating Backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    while (!stack.isEmpty() && arr[stack.peek()] && arr[stack.peek()] >= curr) {
      stack.pop();
    }
    // Place the curr i in stack
    ansArray[i] = stack.peek();
    stack.push(i);
  }

  return ansArray;
}
console.log("Input", heights);
console.log("leftMin", leftMin(heights));
console.log("rightMin", rightMin(heights));
var largestRectangleArea = function (heights) {
  let leftExpandable = leftMin(heights);
  let rightExpandable = rightMin(heights);
  let areas = heights.map((height, i) => {
    let width = rightExpandable[i] - leftExpandable[i] - 1;
    let area = width * height;
    return area;
  });

  return Math.max(...areas);
};
console.log("MaxArea", largestRectangleArea(heights));

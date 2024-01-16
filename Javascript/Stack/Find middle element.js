function solve(stack, midPos) {
  // Base Case
  if (midPos == 1) {
    return stack.peek();
  }

  let temp = stack.peek();
  stack.pop();
  midPos--;

  let recursiveAns = solve(stack, midPos);

  // Backtracking
  stack.push(temp);

  return recursiveAns;
}
// Find middle element
function findMiddleElement(stack) {
  if (stack.isEmpty()) {
    return -1;
  } else {
    // If even size
    let size = stack.size();
    let midPos = -1;
    if (size % 2 == 0) {
      midPos = size / 2;
    } else {
      midPos = Math.floor(size / 2) + 1;
    }

    let ans = solve(stack, midPos);

    return ans;
  }
}

let stack = require("buckets-js").Stack();

// Code here
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

let mid = findMiddleElement(stack);
console.log("mid", mid);

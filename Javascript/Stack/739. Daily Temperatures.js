const { Stack } = require("./Stack");

var dailyTemperatures = function (temperatures) {
  let stack = new Stack();
  let ans = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && temperatures[stack.peek()] <= temperatures[i]) {
      stack.pop();
    }

    if (stack.isEmpty()) {
      ans[i] = 0;
    } else {
      let days = stack.peek() - i;
      ans[i] = days;
    }
    stack.push(i);
  }

  return ans;
};
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));

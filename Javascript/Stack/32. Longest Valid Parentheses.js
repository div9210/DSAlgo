const { Stack } = require("./Stack");

var longestValidParentheses = function (s) {
  let stack = new Stack();
  stack.push(-1);
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    // A closing bracket will cancel out the opening bracket i.e s.pop()
    if (s[i] == ")") {
      stack.pop();
      if (stack.isEmpty()) {
        stack.push(i);
      } else {
        let len = i - stack.peek();
        maxLen = Math.max(maxLen, len);
      }
    } else {
      stack.push(i);
    }
  }

  return maxLen;
};
let s = ")()())";
console.log(longestValidParentheses(s));

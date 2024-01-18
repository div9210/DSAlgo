// By using stack this problem is an ultra easy problem

const { Stack } = require("./Stack");

var isValid = function (s) {
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a" || (s[i] == "b" && stack.peek() == "a")) {
      stack.push(s[i]);
    } else if (s[i] == "c") {
      // Top 2 elements have to be b and a
      let checkB = stack.peek() == "b" ? true : false;
      if (!checkB) return false;
      stack.pop();
      let checkA = stack.peek() == "a" ? true : false;
      if (!checkA) return false;
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
};

console.log(isValid("abccba"));

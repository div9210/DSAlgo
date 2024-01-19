const { Stack } = require("./Stack");

var minAddToMakeValid = function (s) {
  let stack = new Stack();
  let add = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    } else {
      // A closing bracket found
      // check for the opening bracket at stack peek
      if (stack.peek() == "(") {
        stack.pop();
      } else {
        add++;
      }
    }
  }

  // Now add the size of stack
  add += stack.size();
  return add;
};

let s = "(((";
console.log(minAddToMakeValid(s));

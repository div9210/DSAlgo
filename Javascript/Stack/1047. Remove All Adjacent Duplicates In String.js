// This is already done

const { Stack } = require("./Stack");

// But solving that with stack
function removeDuplicates(s) {
  if (s.length == 1) {
    return s;
  }

  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (stack.peek() != s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.getElements().join("");
}

console.log(removeDuplicates("azxxzy"));

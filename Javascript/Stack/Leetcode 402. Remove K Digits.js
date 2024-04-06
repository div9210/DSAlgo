const { Stack } = require("./Stack");

var removeKdigits = function (num, k) {
  let stack = new Stack();
  let removed = 0;
  for (let i = 0; i < num.length; i++) {
    while (
      !stack.isEmpty() &&
      Number(stack.peek()) > Number(num[i]) &&
      removed < k
    ) {
      stack.pop();
      removed++;
    }

    stack.push(num[i]);
  }

  let ans = "";
  while (!stack.isEmpty()) {
    if (removed !== k) {
      removed++;
    } else {
      ans += stack.peek();
    }

    stack.pop();
  }
  ans = ans.split("").reverse().join("");
  // Remove leading zeroes if any
  let substrIndex = 0;
  while (ans[substrIndex] == "0" && substrIndex < ans.length) {
    substrIndex++;
  }

  if (substrIndex === ans.length) return "0";
  else return ans.substring(substrIndex);
};

let num = "112";
let k = 1;
console.log(removeKdigits(num, k));

const { Stack } = require("./Stack");

class Solution {
  //Function to count the number of minimum reversals.
  countRev(s) {
    // If odd number of chars are present
    // We cannot form pairs
    if (s.length % 2 == 1) {
      return -1;
    }
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "{") {
        stack.push(s[i]);
      } else if (s[i] == "}" && stack.peek() != "{") {
        stack.push(s[i]);
      } else {
        // It's a opening bracket
        stack.pop();
      }
    }

    // Now you have only unmatched characters in the stack
    let count = 0;
    while (!stack.isEmpty()) {
      let char1 = stack.peek();
      stack.pop();
      let char2 = stack.peek();
      stack.pop();
      if (char1 == char2) {
        count += 1; // Flip either one of them
      } else {
        count += 2; // Flip both
      }
    }

    return count;
  }
}

let solulu = new Solution();

const result = solulu.countRev("}{{}}{{{");
console.log("result", result);

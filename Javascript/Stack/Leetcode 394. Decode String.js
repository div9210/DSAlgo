// // Algorithm : Match the brakets, push opening bracket and when u find the
// // first closing bracket decode the string till most recent opening bracket
// // decode and push it back to the stack till the iteration of the string is complete

const { Stack } = require("./Stack");
function isCharNumber(c) {
  return typeof c === "string" && c.length == 1 && c >= "0" && c <= "9";
}
var decodeString = function (s) {
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "]") {
      stack.push(s[i]);
    } else {
      // If it is a closing bracket
      let message = "";
      while (
        !stack.isEmpty() &&
        !isCharNumber(stack.peek()) &&
        stack.peek() != "["
      ) {
        message += stack.peek();
        stack.pop();
      }
      // Now stack peek will be pointing to an opening bracket
      stack.pop(); // Removes the opening bracket
      let count = "";
      while (!stack.isEmpty() && isCharNumber(stack.peek())) {
        count += stack.peek();
        stack.pop();
      }
      count = count.split("").reverse().join("");
      let num = Number(count);
      let finalMessage = "";
      while (num) {
        finalMessage += message;
        num--;
      }
      stack.push(finalMessage);
    }
  }

  let ans = "";
  while (!stack.isEmpty()) {
    ans += stack.peek();
    stack.pop();
  }
  return ans.split("").reverse().join("");
};

console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));

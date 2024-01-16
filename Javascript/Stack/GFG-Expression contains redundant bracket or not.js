const { Stack } = require("./Stack");

function checkRedundancy(s) {
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "(" ||
      s[i] == "{" ||
      s[i] == "[" ||
      s[i] == "+" ||
      s[i] == "-" ||
      s[i] == "*" ||
      s[i] == "/"
    ) {
      stack.push(s[i]);
    } else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
      let topOp = stack.peek();

      if (topOp != "+" && topOp != "-" && topOp != "*" && topOp != "/") {
        // If it's not an operator
        return true;
      } else {
        // Remove the operator
        stack.pop();
      }

      // Remove extra operators till u find a bracket
      let top = stack.peek();
      while (
        !stack.isEmpty() &&
        (top == "+" || top == "-" || top == "*" || top == "/")
      ) {
        stack.pop();
        top = stack.peek();
      }

      // After ending the loop either the stack is empty or we found an opening bracket
      if (stack.isEmpty()) {
        return true;
      } else {
        // Match the parentheses
        if (
          (s[i] == ")" && top == "(") ||
          (s[i] == "}" && top == "{") ||
          (s[i] == "]" && top == "[")
        ) {
          stack.pop();
        } else {
          return true;
        }
      }
    }
  }

  return !stack.isEmpty();
}

console.log(checkRedundancy("(a+b+(c+d))") ? "Yes" : "No");

// class Solution {
// public:
//     int checkRedundancy(string s) {
//         stack<char> st;

//         for (int i = 0; i < s.length(); i++) {
//             if (s[i] == '(' || s[i] == '{' || s[i] == '[' ||
//                 s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {
//                 st.push(s[i]);
//             } else if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
//                 char topOp = st.top();

//                 if (topOp != '+' && topOp != '-' && topOp != '*' && topOp != '/') {
//                     return 1;  // Redundancy found
//                 } else {
//                     // Remove the operator
//                     st.pop();
//                 }

//                 // Remove extra operators until you find a bracket
//                 char top = st.top();
//                 while (!st.empty() &&
//                        (top == '+' || top == '-' || top == '*' || top == '/')) {
//                     st.pop();
//                     top = st.top();
//                 }

//                 // After ending the loop either the stack is empty or we found an opening bracket
//                 if (st.empty()) {
//                     return 1;  // Redundancy found
//                 } else {
//                     // Match the parentheses
//                     if ((s[i] == ')' && top == '(') ||
//                         (s[i] == '}' && top == '{') ||
//                         (s[i] == ']' && top == '[')) {
//                         st.pop();
//                     } else {
//                         return 1;  // Redundancy found
//                     }
//                 }
//             }
//         }

//         return st.empty() ? 0 : 1;  // Return 0 for non-redundancy, 1 for redundancy
//     }
// };

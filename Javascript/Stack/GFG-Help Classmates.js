const { Stack } = require("./Stack");

// This is correct but the time complexity is O(n^2)
// class Solution {
//   help_classmate(arr, n) {
//     for (let i = 0; i < n; i++) {
//       let nextStudent = i + 1;
//       // Till roll number is not outOfBound || found a student with less marks
//       while (nextStudent < n && arr[nextStudent] > arr[i]) {
//         nextStudent++;
//       }
//       // If loop ends that means either there is no next student
//       // or we found a student who scored less than us
//       if (nextStudent >= n) {
//         arr[i] = -1;
//       } else {
//         arr[i] = arr[nextStudent];
//       }
//     }
//     return arr;
//   }
// }

// Better approach using stack

class Solution {
  help_classmate(arr, n) {
    // Create a stack and initialise it with -1 i.e smallest val possible
    let stack = new Stack();
    stack.push(-1);

    // Iterate array backwards
    for (let i = n - 1; i >= 0; i--) {
      // While the marks in stack are greater than or equal
      // I don't want them, thus the loop will end only for smaller marks
      while (stack.peek() >= arr[i]) {
        // Remove the stack peek
        stack.pop();
      }
      let arrI = arr[i];
      arr[i] = stack.peek();
      stack.push(arrI);
    }

    // Clear stack
    stack.clear();

    return arr;
  }
}

const sol = new Solution();
let arr = [2, 5, 3, 7, 1, 5, 2, 6, 3, 1];
console.log(sol.help_classmate(arr, arr.length));

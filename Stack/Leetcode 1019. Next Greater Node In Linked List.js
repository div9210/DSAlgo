const { Stack } = require("./Stack");

var nextLargerNodes = function (head) {
  // Convert the LL into an array
  let temp = head;
  let arr = [];
  while (temp != null) {
    arr.push(temp.val);
    temp = temp.next;
  }

  // Now we have the array and we just have to save the next greater element
  // Let's use a stack
  let stack = new Stack();
  // Iterating backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    // Remove elements from stack which are smaller or equal
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      stack.push(arr[i]);
      arr[i] = 0;
    } else {
      let biggerElement = stack.peek();
      stack.push(arr[i]);
      arr[i] = biggerElement;
    }
  }

  return arr;
};

let arr = [2, 1, 5];

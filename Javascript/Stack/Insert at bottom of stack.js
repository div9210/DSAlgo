function insertAtBottom(stack, size, el) {
  // Base Case
  if (size == 0) {
    // Insert the element
    stack.push(el);
    return stack;
  }

  let temp = stack.peek();
  stack.pop();

  // Recursive call
  let recursiveStack = insertAtBottom(stack, size - 1, el);

  // Backtracking
  stack.push(temp);

  return recursiveStack;
}

let stack = require("buckets-js").Stack();

// Code here
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

let ansStack = insertAtBottom(stack, stack.size(), 90);
ansStack.forEach((a) => console.log("|", a, "|"));

module.exports = {
  insertAtBottom,
};

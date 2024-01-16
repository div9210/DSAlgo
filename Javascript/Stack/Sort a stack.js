const stack = require("buckets-js").Stack();
function insertInSortedStack(args, element) {
  // Base Case
  if (args.stack.isEmpty() || args.stack.peek() < element) {
    args.stack.push(element);
    return;
  }

  let temp = args.stack.peek();
  args.stack.pop();

  // Recursively reach to the position
  insertInSortedStack(args, element);

  // Backtracking
  args.stack.push(temp);
}

function sort(args) {
  // Base Case
  if (args.stack.isEmpty()) {
    return;
  }

  let temp = args.stack.peek();
  args.stack.pop();

  // Recursively reach to the end
  sort(args);

  // Backtracking
  insertInSortedStack(args, temp);
}

stack.push(5);
stack.push(1);
stack.push(4);
stack.push(2);
stack.push(9);
stack.push(7);
stack.push(3);

// Pass by ref
let args = { stack };
sort(args);
args.stack.forEach((element) => console.log(element));

// Reverse a queue
let { Stack } = require("../Stack/Stack");
let { Queue } = require("./queue");
function reverse(queue) {
  let stack = new Stack();
  while (!queue.isEmpty()) {
    stack.push(queue.front());
    queue.dequeue();
  }

  // Putting back the stack elements in the queue
  while (!stack.isEmpty()) {
    queue.enqueue(stack.peek());
    stack.pop();
  }
  console.log("Reversed queue :");
  queue.print();
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.enqueue(4);

reverse(queue);
// Reverse k elements in a queue
function reverseKElements(queue, k, n) {
  // Put k elements in stack
  let s = new Stack();
  let tempK = k;
  while (tempK) {
    s.push(queue.front());
    queue.dequeue();
    tempK--;
  }

  // Put stack elements back into queue
  while (!s.isEmpty()) {
    queue.enqueue(s.peek());
    s.pop();
  }

  // Put n-k elements from queue at the back i.e enqueue them
  for (let i = 0; i < n - k; i++) {
    let element = queue.front();
    queue.dequeue();
    queue.enqueue(element);
  }

  console.log("Reverse K Elements :");
  queue.print();
}

reverseKElements(queue, 3, queue.size());
// Interleave first and second half of queue
function interleaveFirstAndSecondHalf(q) {
  let half = null;
  let n = q.size();
  if (n % 2 == 0) {
    half = n / 2;
  } else {
    half = Math.floor(n / 2) + 1;
  }

  // Swap out half elements from the queue and treat them as
  // first
  let first = new Queue();
  for (let i = 0; i < half; i++) {
    let el = q.front();
    q.dequeue();
    first.enqueue(el);
  }

  // Now you have the first half in first and second half in queue
  let firstSize = first.size();
  let secondSize = q.size();
  while (firstSize || secondSize) {
    if (firstSize != 0) {
      let elFirst = first.front();
      first.dequeue();
      q.enqueue(elFirst);
      firstSize--;
    }

    if (secondSize != 0) {
      let elSecond = q.front();
      q.dequeue();
      q.enqueue(elSecond);
      secondSize--;
    }
  }
  console.log("InterLeave :");
  q.print();
}

interleaveFirstAndSecondHalf(queue);

// First -ve integer in every window of k size
function firstNegativeIneveryWindow(nums, k) {
  let q = new Queue();
  // Process first k elements
  for (let i = 0; i < k; i++) {
    // If found negative, push in q
    if (nums[i] < 0) {
      q.enqueue(i);
    }
  }

  // now n-k elements from k to n
  let ansStr = "";
  for (let i = k; i < nums.length; i++) {
    if (!q.isEmpty()) {
      // Print prev window ans
      ansStr += nums[q.front()] + " | ";
    } else {
      ansStr += null + " | ";
    }

    // Check removal i.e if q.front is out of range
    if (i - k >= q.front()) {
      q.dequeue();
    }

    // Check Addition
    if (nums[i] < 0) {
      q.enqueue(i);
    }
  }

  // Process last window
  if (!q.isEmpty()) {
    // Print prev window ans
    ansStr += nums[q.front()] + " | ";
  } else {
    ansStr += null + " | ";
  }

  console.log("First -ve in window of size", k, "in", nums);
  console.log(ansStr);
}
let nums = [1, 3, -1, -3, 5, 3, 6, -7],
  k = 3;
firstNegativeIneveryWindow(nums, k);

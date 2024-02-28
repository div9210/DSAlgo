const { Deque } = require("./dequeue");

var maxSlidingWindow = function (nums, k) {
  let maxq = new Deque();
  // Process first k elements
  for (let i = 0; i < k; i++) {
    // Remove all the smaller elements from q
    while (!maxq.isEmpty() && nums[maxq.front()] < nums[i]) {
      maxq.dequeueFront();
    }
    maxq.enqueueRear(i);
  }

  // Now we have the max element for the first window
  // Process next elements
  let result = [];
  for (let i = k; i < nums.length; i++) {
    // Process queue till now
    if (!maxq.isEmpty()) {
      result.push(nums[maxq.front()]);
    }

    // Remove the out of range elements from queue (if any)
    if (!maxq.isEmpty() && i - k >= maxq.front()) {
      // That means maxq.front() is out of range
      maxq.dequeueFront();
    }

    // Remove all the smaller numbers to make space for addition
    while (!maxq.isEmpty() && nums[maxq.rear()] < nums[i]) {
      maxq.dequeueRear();
    }

    // Addition
    maxq.enqueueRear(i);
  }

  // Process Last Window
  if (!maxq.isEmpty()) {
    result.push(nums[maxq.front()]);
  }

  return result;
};
let nums = [1, 3, 1, 2, 0, 5],
  k = 3;

console.log(maxSlidingWindow(nums, k));

// There is one more question sum of min max in each window
var sumOfMinMaxInWindow = function (nums, k) {
  let maxq = new Deque();
  let minq = new Deque();
  let sum = 0;
  // Process first k elements
  for (let i = 0; i < k; i++) {
    // Remove all the smaller elements from maxq
    while (!maxq.isEmpty() && nums[maxq.front()] < nums[i]) {
      maxq.dequeueFront();
    }

    // Remove all the bigger elements from minq
    while (!minq.isEmpty() && nums[minq.front()] > nums[i]) {
      minq.dequeueFront();
    }

    maxq.enqueueRear(i);
    minq.enqueueRear(i);
  }

  // Now we have the max element for the first window
  // Process next elements
  for (let i = k; i < nums.length; i++) {
    // Process queue till now
    if (!maxq.isEmpty() && !minq.isEmpty()) {
      sum += nums[maxq.front()] + nums[minq.front()];
    }

    // Remove the out of range elements from maxq (if any)
    if (!maxq.isEmpty() && i - k >= maxq.front()) {
      // That means maxq.front() is out of range
      maxq.dequeueFront();
    }

    // Remove the out of range elements from minq (if any)
    if (!minq.isEmpty() && i - k >= minq.front()) {
      // That means minq.front() is out of range
      minq.dequeueFront();
    }

    // Remove all the smaller numbers to make space for addition
    while (!maxq.isEmpty() && nums[maxq.rear()] < nums[i]) {
      maxq.dequeueRear();
    }

    // Remove all the bigger numbers to make space for addition
    while (!minq.isEmpty() && nums[minq.rear()] < nums[i]) {
      minq.dequeueRear();
    }

    // Addition
    maxq.enqueueRear(i);
    minq.enqueueRear(i);

    sum += nums[maxq.front()] + nums[minq.front()];
  }

  // Process Last Window
  if (!maxq.isEmpty()) {
    sum += nums[maxq.front()] + nums[minq.front()];

    // result.push(nums[maxq.front()]);
  }

  return sum;
};

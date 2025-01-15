class Deque {
  constructor() {
    this.items = [];
  }

  // Add element to the front of the deque
  enqueueFront(element) {
    this.items.unshift(element);
  }

  // Add element to the rear of the deque
  enqueueRear(element) {
    this.items.push(element);
  }

  // Remove and return the element from the front of the deque
  dequeueFront() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Remove and return the element from the rear of the deque
  dequeueRear() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Get the front element without removing it
  front() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    return this.items[0];
  }

  // Get the rear element without removing it
  rear() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the deque is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the deque
  size() {
    return this.items.length;
  }
}

// // Example usage:
// const deque = new Deque();

// deque.addRear(1);
// deque.addRear(2);
// deque.addFront(0);

// console.log("Front element:", deque.getFront()); // Output: 0
// console.log("Rear element:", deque.getRear()); // Output: 2

// deque.removeFront();
// console.log("Size after removing front:", deque.size()); // Output: 2

// deque.removeRear();
// console.log("Size after removing rear:", deque.size()); // Output: 1

module.exports = {
  Deque,
};

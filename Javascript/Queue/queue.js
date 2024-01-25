class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Print the elements of the queue
  print() {
    console.log(this.items);
  }
}

// Example usage:
// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log("Queue:");
// queue.print(); // Output: [1, 2, 3]

// console.log("Front element:", queue.front()); // Output: 1

// console.log("Dequeue:", queue.dequeue()); // Output: 1
// console.log("Updated Queue:");
// queue.print(); // Output: [2, 3]

module.exports = {
  Queue,
};

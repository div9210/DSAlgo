const { Stack } = require("../Stack/Stack");

class MyQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  push(val) {
    this.s1.push(val);
  }
  pop() {
    if (this.s2.isEmpty()) {
      // Move all the elements from s1 to s2
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.peek());
        this.s1.pop();
      }
    }
    // Remove from s2
    let peek = this.s2.peek();
    this.s2.pop();
    return peek;
  }
  peek() {
    if (this.s2.isEmpty()) {
      // Move all the elements from s1 to s2
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.peek());
        this.s1.pop();
      }
    }
    // Remove from s2
    return this.s2.peek();
  }
  empty() {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }
}

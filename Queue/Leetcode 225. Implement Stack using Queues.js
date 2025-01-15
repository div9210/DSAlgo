const { Queue } = require("./queue");

class MyStack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }
  push(val) {
    this.q1.enqueue(val);
  }
  pop() {
    if (this.q1.isEmpty()) {
      return null; // Underflow
    } else {
      // while q1 doen't have only one element
      // move the elements to q2
      while (this.q1.size() != 1) {
        this.q2.enqueue(this.q1.front());
        this.q1.dequeue();
      }

      // return the top element from q1
      let frontQ1 = this.q1.front();
      this.q1.dequeue();

      // Before returning maintain the initial state
      // that is all the elements back in q1
      while (!this.q2.isEmpty()) {
        this.q1.enqueue(this.q2.front());
        this.q2.dequeue();
      }
      return frontQ1;
    }
  }
  top() {
    if (this.q1.isEmpty()) {
      return null; // Underflow
    } else {
      // while q1 doen't have only one element
      // move the elements to q2
      while (this.q1.size() != 1) {
        this.q2.enqueue(this.q1.front());
        this.q1.dequeue();
      }

      // return the top element from q1
      let frontQ1 = this.q1.front();
      this.q1.dequeue();
      // Before returning maintain the initial state
      // that is all the elements back in q1
      while (!this.q2.isEmpty()) {
        this.q1.enqueue(this.q2.front());
        this.q2.dequeue();
      }

      // Now push the top element as well
      this.q1.enqueue(frontQ1); // Since this method is not pop
      return frontQ1;
    }
  }
  empty() {
    return this.q1.isEmpty() && this.q2.isEmpty();
  }
}

let s = new MyStack();
console.log(s.push(1));
console.log(s.push(2));
console.log(s.top());
console.log(s.pop());
console.log(s.empty());

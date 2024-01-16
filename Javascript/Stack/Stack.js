class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(element) {
    this.items.push(element);
    this.top++;
  }

  pop() {
    if (this.top == -1) {
      return null;
    }
    this.items.pop();
    this.top--;
  }

  peek() {
    if (this.top == -1) {
      // console.log("Stack is empty");
      return null;
    }
    return this.items[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  size() {
    return this.top + 1;
  }

  clear() {
    this.items = [];
    this.top = -1;
  }

  getElements() {
    return this.items;
  }
}

// const st = new Stack();
// console.log(st.push(5));
// console.log(st.pop());
// console.log(st.pop());
// console.log(st.pop());
// console.log(st.isEmpty());

// console.log(st.push(6));
// console.log(st.push(7));
// console.log(st.push(5));
// console.log(st.push(4));
// console.log(st.push(3));
// console.log(st.pop());
// console.log(st.peek());
// console.log(st.size());
// console.log(st);

module.exports = {
  Stack,
};

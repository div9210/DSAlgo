/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (stack.size() > 0 && stack.peek().char === s[i]) {
      stack.peek().count++;
    } else {
      stack.push({ char: s[i], count: 1 });
    }
    if (stack.peek().count === k) {
      stack.pop();
    }
  }
  let ans = "";
  while (stack.size() > 0) {
    const { char, count } = stack.peek();
    stack.pop();
    ans += char.repeat(count);
  }
  return ans.split("").reverse().join("");
};

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

const result = removeDuplicates("deeedbbcccbdaa", 3);
console.log("result", result);
